const testFolder = './tests/';
const fs = require('fs');
const path = 'tests/';

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats.size
  return fileSizeInBytes
}

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    const filesize = getFilesizeInBytes(path+file);
    console.log('%s - %d mb', file, filesize );
  });
});


function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

console.log(getDirectories(testFolder));  
