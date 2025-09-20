const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import paths that end with .tsx but are missing quotes
    content = content.replace(/from\s+['"]([^'"]*?)\.tsx['"]/g, "from '$1.tsx'");
    content = content.replace(/import\s+['"]([^'"]*?)\.tsx['"]/g, "import '$1.tsx'");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'node_modules' && item !== '.git') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix all .tsx files
const tsxFiles = findTsxFiles('./src');
console.log(`Found ${tsxFiles.length} .tsx files`);

tsxFiles.forEach(fixImportsInFile);

console.log('Import path fixing completed!');