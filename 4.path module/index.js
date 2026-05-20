const path = require('path');

// The `path` module provides utilities for working with file and directory paths.
//  It is a built-in module in Node.js, so you don't need to install it separately.
// You can use the `path` module to manipulate file paths, such as joining, resolving,
//  or normalizing them.  
   // __filename is a global variable in Node.js that contains the absolute path of the currently executing file.
console.log('Directory name:', path.dirname(__filename));// outputs the directory name of the current file
console.log('File name:', path.basename(__filename)); // outputs the file name of the current file, including the extension
console.log("file extension", path.extname(__filename));// outputs the file extension of the current file


const joinPath = path.join('/user', 'documents', 'node', 'projects')
console.log('Joined path:', joinPath);
// The `path.join()` method joins all given path segments together using the platform-specific 
// separator as a delimiter, then normalizes the resulting path. In this example, it will create
//  a path like '/user/documents/node/projects' on Unix-based systems or
//  'C:\\user\\documents\\node\\projects' on Windows.

const resolvePath = path.resolve('user', 'documents', 'node', 'projects');
console.log('Resolved path:', resolvePath);
// The `path.resolve()` method resolves a sequence of paths or path segments into an absolute path.
//  It processes the sequence from right to left, prepending each segment until an absolute path is constructed.
//  If no absolute path is found, the current working directory is used as the starting point.

const normalizePath = path.normalize('/user//documents/../node/projects');
console.log('Normalized path:', normalizePath);
// The `path.normalize()` method normalizes a given path, resolving '..' and '.' segments and removing redundant separators.
// In this example, it will convert the path to '/user/node/projects' by resolving the '..' segment and removing the extra '/'. 