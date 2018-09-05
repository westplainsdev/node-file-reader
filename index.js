const express = require('express');
const app = express();
const config = require('./config');


const fs = require('fs');

app.get('/', (req, res, next) =>{

    let fileslist = [];
   fileslist[0] = `<h3>File Listing</h3>`;

    function getFilesizeInBytes(filename) {
        const stats = fs.statSync(filename)
        const fileSizeInBytes = stats.size
        return fileSizeInBytes
      }
      
      fs.readdir(config.path(), (err, files) => {
        files.forEach(file => {
          const filesize = getFilesizeInBytes(config.path()+file);
          let rowInfo = {
              fileName: file,
              fileSize: filesize
          }

          let template = `File Name: ${rowInfo.fileName} - ${rowInfo.fileSize}kbs <br />`;        
          fileslist.push(template);
        });
        res.send(fileslist.join(" "));
      });
     
});

app.listen(3000, () => console.log('Our server is running on port 3000'));
