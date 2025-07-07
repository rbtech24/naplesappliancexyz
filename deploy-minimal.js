// Minimal deployment script to fix Netlify build issues
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Creating minimal build for emergency deployment...');

try {
  // Create minimal dist structure
  const distDir = './dist/public';
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
  }
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Copy essential files
  fs.copyFileSync('./client/index.html', path.join(distDir, 'index.html'));
  
  // Create _redirects for SPA routing
  fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200\n');
  
  // Update index.html for production
  let indexContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  
  // Replace dev script with production notice
  indexContent = indexContent.replace(
    '<script type="module" src="/src/main.tsx"></script>',
    '<script>document.getElementById("root").innerHTML = "<div style=\\"text-align:center;padding:50px;font-family:system-ui;\\"><h1 style=\\"color:#1565c0;margin-bottom:20px;\\">Naples Appliance Repair</h1><p style=\\"font-size:18px;color:#333;margin-bottom:30px;\\">Professional appliance repair services in Naples, Florida</p><p style=\\"font-size:16px;\\">Call us now for immediate service:</p><a href=\\"tel:+12392302100\\" style=\\"display:inline-block;background:#1565c0;color:white;padding:15px 30px;text-decoration:none;border-radius:5px;font-size:20px;font-weight:bold;margin:20px;\\">📞 (239) 230-2100</a><p style=\\"margin-top:30px;color:#666;\\">We service all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, and more.</p></div>";</script>'
  );
  
  fs.writeFileSync(path.join(distDir, 'index.html'), indexContent);
  
  console.log('Minimal build created successfully!');
  console.log('Files created:');
  console.log('- dist/public/index.html');
  console.log('- dist/public/_redirects');
  
} catch (error) {
  console.error('Error creating minimal build:', error);
  process.exit(1);
}