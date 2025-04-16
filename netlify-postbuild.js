const fs = require('fs');
const path = require('path');

// Define the build directory
const buildDir = path.resolve(__dirname, 'dist/public');

// Ensure _redirects file exists in the build directory
const redirectsContent = '/* /index.html 200';
const redirectsPath = path.join(buildDir, '_redirects');

// Write the redirects file
fs.writeFileSync(redirectsPath, redirectsContent, 'utf8');
console.log('Created Netlify _redirects file for SPA routing');

// Check if index.html contains the proper base tag
const indexPath = path.join(buildDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add a meta tag for React router if not present
  if (!indexContent.includes('<meta name="fragment"')) {
    indexContent = indexContent.replace(
      '<head>',
      '<head>\n    <meta name="fragment" content="!">'
    );
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Added fragment meta tag to index.html for better SPA routing');
  }
}

console.log('Netlify deployment preparation completed successfully');