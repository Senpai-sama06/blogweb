import { remark } from 'remark';
import remarkHiddenContent from './src/lib/remark-hidden-content.js';
import fs from 'fs';

// Explicitly use the text that we know causes issues
const doc = `
#hide{Derrivation
We can derive the intuition for this using the Time Scaling Property.
}
`;

const processor = remark().use(remarkHiddenContent);
const tree = processor.parse(doc);

// simple util to print tree
// console.log(JSON.stringify(tree, null, 2));

processor.run(tree).then(transformed => {
    let found = false;
    const visit = (node) => {
        if (node.type === 'hiddenContent') {
            found = true;
            console.log('Found hiddenContent with title:', node.data.hProperties.title);
            console.log('Children count:', node.children.length);
        }
        if (node.children) node.children.forEach(visit);
    };
    visit(transformed);

    if (!found) {
        console.log('Did NOT find hiddenContent node');
        console.log('Tree structure:');
        console.log(JSON.stringify(transformed, null, 2));
    }
});
