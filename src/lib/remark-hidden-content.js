import { visit } from 'unist-util-visit';

export default function remarkHiddenContent() {
    return (tree) => {
        // console.log('RemarkHiddenContent: Visitor running');
        visit(tree, 'paragraph', (node, index, parent) => {
            if (node.children.length > 0 && node.children[0].type === 'text') {
                const text = node.children[0].value;

                // Match ":::hide [Title]" at start of paragraph
                // The (?:\n|$) ensures we match the directive line, but we capture the rest in a way we can split.
                const startMatch = text.match(/^:::\s*hide\s*(.*?)(?:\n|$)/im);

                if (startMatch) {
                    console.log('RemarkPlugin: Start:', startMatch[0]);
                    const title = startMatch[1].trim() || 'Details';
                    const fullMatchString = startMatch[0];

                    let endIndex = -1;
                    let endInSameNode = false;

                    // Check if end tag is in the SAME node (e.g. one-liner or simple block)
                    // We check if ":::" appears at the end of the text, or on a newline
                    // Note: If startMatch matched the whole string, end might not be there or is implicit? 
                    // No, invalid syntax if no end.
                    // We look for \n::: at end of string or just ::: if it's the whole string
                    // But we must be careful not to match the start ::: as the end :::

                    const textAfterStart = text.slice(fullMatchString.length);
                    if (textAfterStart.match(/(?:\n|^):::\s*$/)) {
                        endInSameNode = true;
                        endIndex = index;
                    } else {
                        // Search subsequent nodes
                        for (let i = index + 1; i < parent.children.length; i++) {
                            const potentialEndNode = parent.children[i];
                            if (potentialEndNode.type === 'paragraph' && potentialEndNode.children.length > 0) {
                                // We check the LAST child if it's text, or the node value if it's simple
                                const lastChild = potentialEndNode.children[potentialEndNode.children.length - 1];
                                if (lastChild.type === 'text') {
                                    if (lastChild.value.match(/(?:\n|^):::\s*$/)) {
                                        endIndex = i;
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    if (endIndex !== -1) {
                        console.log('RemarkPlugin: End found at index', endIndex, 'Same node:', endInSameNode);

                        const children = [];

                        if (endInSameNode) {
                            // Everything is in 'text' (node.children[0]) or mixed children of ONE paragraph
                            // We need to strip start ":::hide..." and end ":::"

                            // Simplification: We assume if end is in same node, the node is primarily text 
                            // or we just process the text node containing the tags.
                            // But usually, one paragraph = one text node if simple. 
                            // If links/formatting, it's complex.

                            // Let's handle the simple case where it's one text node first.
                            if (node.children.length === 1 && node.children[0].type === 'text') {
                                const raw = node.children[0].value;
                                // Remove start match
                                let content = raw.substring(fullMatchString.length);
                                // Remove end match (last occurrence of :::)
                                content = content.replace(/(?:\n|^):::\s*$/, '');

                                children.push({ type: 'text', value: content });
                            } else {
                                // Complex inline case not fully supported yet for robustness in short time, 
                                // but we can try to just use valid children relative to start/end text.
                                // For now, assuming sticking to standard paragraphs is safer.
                            }
                        } else {
                            // Start Node processing
                            // We keep everything AFTER the start match in the start node
                            // If start node was just ":::hide Title", remaining is empty (or just newline)

                            // If the Start Paragraph has multiple children (e.g. bold text after title), 
                            // we need to be careful.
                            // We assume the directive is the very first thing in the first text child.

                            const firstTextChild = node.children[0];
                            const remainingTextOfFirstChild = firstTextChild.value.substring(fullMatchString.length);

                            if (remainingTextOfFirstChild.trim().length > 0 || node.children.length > 1) {
                                // Construct new start paragraph content
                                const newStartChildren = [
                                    { type: 'text', value: remainingTextOfFirstChild },
                                    ...node.children.slice(1)
                                ];
                                children.push({ type: 'paragraph', children: newStartChildren });
                            }

                            // Middle Nodes
                            const middleNodes = parent.children.slice(index + 1, endIndex);
                            children.push(...middleNodes);

                            // End Node processing
                            const endNode = parent.children[endIndex];
                            const lastChildIndex = endNode.children.length - 1;
                            const lastChild = endNode.children[lastChildIndex];

                            // We strip the ":::" from the end of the last text child
                            const textUntilEnd = lastChild.value.replace(/(?:\n|^):::\s*$/, '');

                            if (textUntilEnd.trim().length > 0 || endNode.children.length > 1) {
                                const newEndChildren = [
                                    ...endNode.children.slice(0, lastChildIndex),
                                    { type: 'text', value: textUntilEnd }
                                ];
                                children.push({ type: 'paragraph', children: newEndChildren });
                            }
                        }

                        const hiddenNode = {
                            type: 'hiddenContent',
                            data: {
                                hName: 'hidden-content',
                                hProperties: { title: title },
                            },
                            children: children,
                        };

                        parent.children.splice(index, endIndex - index + 1, hiddenNode);
                    }
                }
            }
        });
    };
}
