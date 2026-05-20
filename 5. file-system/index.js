// Helps you work with the file system in a more convenient way. It provides functions to read, write, and manipulate files and directories.

const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
// Ensure the data folder exists
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created.');
}
//create a file and write some data to it
const filePath = path.join(dataFolder, 'example.txt');
const content = 'Hello, this is an example file created using Node.js!';
//sync way of creating a file and writing data to it
fs.writeFileSync(filePath, content);
console.log('File created and data written successfully.');

//read the content of the file
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('Content of the file:', fileContent);

//append/add some data to the file
const additionalContent = '\nThis is additional content appended to the file.';
fs.appendFileSync(filePath, additionalContent);
console.log('Additional content appended successfully.');

//async way of creating the file
const asyncFilePath = path.join(dataFolder, 'asyncExample.txt');
const asyncContent = 'This file is created asynchronously using Node.js!';  
fs.writeFile(asyncFilePath, asyncContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Async file created and data written successfully.');

    //read the content of the async file from here to ensure it was created successfully
    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Content of the async file:', data);

        //append/add some data to the async file
        const asyncAdditionalContent = '\nThis is additional content appended to the async file.'; 
        fs.appendFile(asyncFilePath, asyncAdditionalContent, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
                return;
            }
            console.log('New line appended to async file successfully.');

            //read the content of the async file again to see the appended content
            fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                console.log('Updated content of the async file:', updatedData);
            });
        });
    });
});