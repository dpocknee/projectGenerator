const fs = require('fs');

// fs.writeFile('test/message2.txt', 'This is some content', err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// index.js
fs.writeFile('test/index.js', '', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// spec folder
fs.mkdir('./spec/', { recursive: true }, err => {});

// index.spec.js
fs.writeFile('./spec/index.spec.js', '', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// package.json

// README.md

// eslint config file

// .gitignore

// git repo initialised
