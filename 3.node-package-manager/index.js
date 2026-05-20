const lodash = require('lodash');

const names = ['max', 'verteppen', 'charlie', 'david', 'danilo'];
const capitalize = lodash.map(names, lodash.capitalize); 

console.log(capitalize); // Output: ['Max', 'Verteppen', 'Charlie', 'David', 'Danilo']


// to initialize a new npm package, we can use the `npm init` command in the terminal.
// This will create a `package.json` file in the current directory, which is used to manage
// the dependencies and scripts of the package. We can then install any necessary dependencies
//  using `npm install <package-name>`, and we can run our code using `npm start` or any other
// script defined in the `package.json` file.

// The `package.json` file is a JSON file that contains metadata about the package, such as its name,
//  version, description, main file, scripts, and dependencies. It is used by npm to manage the package
// and its dependencies, and it is also used by other tools and services that work with npm packages.

// The `node_modules` directory is where npm installs the dependencies of the package. When we run `npm install
//  <package-name>`, npm will download the package and its dependencies and save them in the `node_modules` directory
// . We can then use `require` to import the installed packages in our code. For example, we can use `const lodash =
//  require('lodash');` to import the lodash package and use its functions in our code.

//An installed package such as lodash can be used in our code by importing it using `require`.
//  We can then use the functions provided by the package to perform various tasks.For example,
// we can use `lodash.map` to iterate over an array and apply a function to each element, as shown in the code above.
// It is installed in the following form npm install lodash, and it will be added to the dependencies in the
//  package.json file. We can then use it in our code by requiring it as shown above.

//to use "npm start" to run the server you must add a "start" script to the "scripts" section of the package.json file. For example:
// "scripts": {
//   "start": "node index.js"
// }    
