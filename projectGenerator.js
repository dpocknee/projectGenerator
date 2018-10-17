const fs = require('fs');
const { exec }  = require('child_process');

const fileToUse = '';

const forSpecFile =
  "const { expect } = require('chai');\n\ndescribe('', () => {\n\tit('', () => {\n\t\t});\n});";

const readme = `#Title\n\nA description of you project goes here.\n`;

const eslintrc = `{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "mocha": true,
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "plugins": [
  ],
  "rules": {
    "no-console": 0,
    "space-before-blocks": 1,
    "arrow-spacing": 1,
    "keyword-spacing": 1,
    "space-infix-ops": 1,
    "space-in-parens": 1,
    "spaced-comment": 1,
    "semi": 1,
    "no-multiple-empty-lines": 1
  }
}` 

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
exec('npm init -y', (error, stdout, stderr) => {
  console.log(stdout[0]);
  if (stdout[0] === '{') {
    const packageObj = JSON.parse(stdout);
    packageObj.scripts = {
      "test-utils": "mocha ./spec/utils.spec.js",
      "test-dev": "mocha ./spec/main.spec.js",
      "test": "mocha ./spec/*.spec.js --bail",
      "lint": "eslint ./",
      "posttest": "npm run lint"
    };
    fs.writeFile(`./${fileToUse}package.json`, packageObj, err => {
      if (err) throw err;
      console.log('The package JSON has been created!');
    });
  }  
  console.log(`${stdout}`);
  // console.log(`${stderr}`);
});

// README.md
fs.writeFile(`./${fileToUse}README.md`, readme, err => {
  if (err) throw err;
  console.log('readme file created!');
});

// eslint config file
fs.writeFile(`./${fileToUse}.eslintrc`, eslintrc, err => {
  if (err) throw err;
  console.log('.eslintrc file created!');
});

// .gitignore
fs.writeFile(`./${fileToUse}.gitgnore`, gitignore, err => {
  if (err) throw err;
  console.log('gitignore file created!');
});

// git repo initialised
exec('git init', (error, stdout, stderr) => {
  console.log(`${stdout}`);
  console.log(`${stderr}`);
});