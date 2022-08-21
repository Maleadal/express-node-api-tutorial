// ! Modules - Encapsulated code (only share minimum)
// ! CommonJS, every file is module (defauls)

const names = require("./3-names");
const utils = require("./3-utils");
const keys = Object.keys(names);

require('./4-mind-grenade')

for (var i in keys) {
  utils.sayHi(names[keys[i]]);
}
