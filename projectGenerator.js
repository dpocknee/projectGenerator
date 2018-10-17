const fs = require('fs');

const fileToUse = 'newTest/';

const forSpecFile =
  "const { expect } = require('chai');\n\ndescribe('', () => {\n\tit('', () => {\n\t\t});\n});";

const readme = `#Title\n\nA description of you project goes here.\n`;

const gitignore = 'node_modules\n';

// index.js
fs.writeFile(`./${fileToUse}index.js`, '', err => {
  if (err) throw err;
  console.log('The index.js file has been created!');
});

// spec folder & index.spec.js
fs.mkdir(`./${fileToUse}spec/`, { recursive: true }, err => {
  fs.writeFile(`./${fileToUse}spec/index.spec.js`, forSpecFile, err => {
    if (err) throw err;
    console.log('The spec file has been created!');
  });
});

// package.json

// README.md
fs.writeFile(`./${fileToUse}README.md`, readme, err => {
  if (err) throw err;
  console.log('readme file created!');
});

// eslint config file

// .gitignore
fs.writeFile(`./${fileToUse}.gitgnore`, gitignore, err => {
  if (err) throw err;
  console.log('gitignore file created!');
});

// git repo initialised
