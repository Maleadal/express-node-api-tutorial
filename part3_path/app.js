const path = require("path");

// Get the separator
console.log(path.sep);

const filePath = path.join("/contents", "sub-folder", "test.txt");
console.log(filePath);

// * Get the last path of filepath
const base = path.basename(filePath);
console.log(base);

// ! Full path depending on the machine
const absolute = path.resolve(__dirname, 'contents', 'sub-folder', 'test.txt');
console.log(absolute);