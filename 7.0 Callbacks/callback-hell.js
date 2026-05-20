//file system
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
    console.log('File content:', data);
    
    const modifyFileData=data.toUpperCase();
    fs.writeFile('output.txt', modifyFileData, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
        console.log('File has been modified and saved as output.txt/ Data written to the new file successfully.');
        
        fs.readFile('output.txt', 'utf8', (err, modifiedData) => {
          if (err) {
            console.error('Error reading modified file:', err);
            return;
          }
          console.log('Modified File content:', modifiedData);
        });
      });
    });