const fs = require('fs');

// fs.writeFile('test/message2.txt', 'This is some content', err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// index.js
// fs.writeFile('test/index.js', '', err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

const forSpecFile =
  "const { expect } = require('chai');\n\ndescribe('', () => {\n\tit('', () => {\n\t\t});\n});";

// spec folder
fs.mkdir('./spec/', { recursive: true }, err => {
  fs.writeFile('./spec/index.spec.js', forSpecFile, err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

// index.spec.js

// package.json

// README.md

// eslint config file

// .gitignore

// git repo initialised
