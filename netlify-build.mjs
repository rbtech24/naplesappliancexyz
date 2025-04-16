// netlify-build.mjs - ESM compatible build script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const buildDir = path.join(__dirname, 'dist', 'public');

console.log('Running Netlify build preparation script...');

// Create _redirects file for client-side routing
try {
  // Create the file with the SPA redirect rule
  fs.writeFileSync(
    path.join(buildDir, '_redirects'), 
    '/* /index.html 200',
    'utf8'
  );
  console.log('Created _redirects file successfully');
} catch (error) {
  console.error('Error creating _redirects file:', error);
  process.exit(1);
}

// Update the index.html if needed
try {
  const indexPath = path.join(buildDir, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Only add meta tags if they don't already exist
  if (!indexContent.includes('<meta name="fragment"')) {
    console.log('Adding SPA meta tags to index.html');
    
    // Replace the head tag to include our SPA routing meta tags
    indexContent = indexContent.replace(
      '<head>',
      `<head>
    <meta name="fragment" content="!">
    <meta name="router" content="SPA">`
    );
    
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Updated index.html successfully');
  }
} catch (error) {
  console.error('Error updating index.html:', error);
  process.exit(1);
}

console.log('Netlify build preparation completed successfully');