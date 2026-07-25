import fs from 'fs';
import path from 'path';

const componentsDir = 'C:/Users/acer/.gemini/antigravity/scratch/pirenesh-portfolio/src/components';

const replacements = [
  { regex: /bg-\[#0A0A0A\]/g, replacement: 'bg-bg-primary' },
  { regex: /bg-\[#111111\]/g, replacement: 'bg-bg-secondary' },
  { regex: /bg-\[#050505\]/g, replacement: 'bg-bg-primary' },
  { regex: /bg-gray-900/g, replacement: 'bg-bg-secondary' },
  { regex: /bg-gray-800/g, replacement: 'bg-border-primary' },
  { regex: /text-gray-300/g, replacement: 'text-text-secondary' },
  { regex: /text-gray-400/g, replacement: 'text-text-secondary' },
  { regex: /text-gray-500/g, replacement: 'text-text-secondary' },
  { regex: /border-gray-800/g, replacement: 'border-border-primary' },
  { regex: /border-gray-700/g, replacement: 'border-border-primary' },
  { regex: /border-gray-600/g, replacement: 'border-border-primary' },
  { regex: /border-gray-500/g, replacement: 'border-border-primary' },
  { regex: /hover:border-white/g, replacement: 'hover:border-text-primary' },
  { regex: /from-white/g, replacement: 'from-text-primary' },
  { regex: /to-gray-500/g, replacement: 'to-text-secondary' },
  // Remove grayscale from images (Bug 1)
  { regex: /grayscale hover:grayscale-0/g, replacement: '' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      // Handle text-white specifically so we don't break red buttons
      // Replace text-white with text-text-primary ONLY if it is not a child of or sibling to red button classes.
      // Easiest is to replace all, then fix the buttons.
      content = content.replace(/text-white/g, 'text-text-primary');
      
      // Fix buttons
      content = content.replace(/bg-\[var\(--color-primary-red\)\] text-text-primary/g, 'bg-[var(--color-primary-red)] text-white');
      content = content.replace(/bg-transparent border border-border-primary text-text-primary/g, 'bg-transparent border border-border-primary text-text-primary');
      content = content.replace(/bg-\[var\(--color-primary-red\)\]\/10 text-\[var\(--color-primary-red\)\] text-xs/g, 'bg-[var(--color-primary-red)]/10 text-[var(--color-primary-red)] text-xs');
      content = content.replace(/bg-bg-primary text-text-primary font-semibold py-4 rounded-lg/g, 'bg-[var(--color-primary-red)] text-white font-semibold py-4 rounded-lg');
      content = content.replace(/text-text-primary text-sm hover:text-\[var\(--color-primary-red\)\]/g, 'text-text-primary text-sm hover:text-[var(--color-primary-red)]');
      
      // Specific fixes for buttons in Navbar & Hero that might have been broken
      if (file === 'Hero.tsx') {
        content = content.replace(/border border-border-primary text-text-primary font-semibold rounded hover:border-\[var\(--color-primary-red\)\]/g, 'border border-border-primary text-text-primary font-semibold rounded hover:border-[var(--color-primary-red)]');
      }
      if (file === 'Contact.tsx') {
        content = content.replace(/w-full bg-\[var\(--color-primary-red\)\] text-text-primary font-semibold py-4/g, 'w-full bg-[var(--color-primary-red)] text-white font-semibold py-4');
      }
      if (file === 'Navbar.tsx') {
        content = content.replace(/bg-\[var\(--color-primary-red\)\] text-text-primary font-medium/g, 'bg-[var(--color-primary-red)] text-white font-medium');
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(componentsDir);
console.log('Done replacing theme classes.');
