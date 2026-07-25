import fs from 'fs';
import path from 'path';

const componentsDir = 'C:/Users/acer/.gemini/antigravity/scratch/pirenesh-portfolio/src/components';
const otherDirs = ['C:/Users/acer/.gemini/antigravity/scratch/pirenesh-portfolio/src']; // for App.tsx? No, App.tsx has no red.

const replacements = [
  { regex: /--color-primary-red-hover/g, replacement: '--color-accent-secondary' },
  { regex: /--color-primary-red/g, replacement: '--color-accent-primary' },
  { regex: /#E10600/g, replacement: '#60A5FA' },
  { regex: /#FF1E1E/g, replacement: '#38BDF8' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir(componentsDir);
console.log('Done replacing accent variables.');
