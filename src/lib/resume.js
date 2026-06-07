import fs from 'fs';
import path from 'path';

/**
 * Dynamically fetches resume entries for a given category (experience, education, leadership).
 * Scans the filesystem for entry.js files in subdirectories.
 */
export async function getResumeEntries(category) {
    const categoryPath = path.join(process.cwd(), 'src/app/resume', category);
    
    if (!fs.existsSync(categoryPath)) {
        return [];
    }

    const folders = fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'));
        
    const entries = [];

    for (const folder of folders) {
        const entryPath = path.join(categoryPath, folder.name, 'entry.js');
        
        if (fs.existsSync(entryPath)) {
            try {
                const fileContent = fs.readFileSync(entryPath, 'utf8');
                // Improved regex to capture the entry object more reliably
                const match = fileContent.match(/export const entry = ({[\s\S]*?});/);
                
                if (match && match[1]) {
                    const entry = new Function(`return ${match[1]}`)();
                    if (entry) {
                        fs.appendFileSync('resume-debug.log', `Found entry: ${entry.title}\n`);
                        entries.push({
                            ...entry,
                            id: folder.name,
                            link: `/resume/${category}/${folder.name}`
                        });
                    }
                } else {
                    fs.appendFileSync('resume-debug.log', `Regex failed for ${entryPath}\n`);
                }
            } catch (error) {
                fs.appendFileSync('resume-debug.log', `Error loading ${entryPath}: ${error.message}\n`);
            }
        }
    }

    return entries;
}
