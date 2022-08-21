// ! Operating system (os)

const os = require("os");

// * Info about current user
const user = os.userInfo();
console.log(user);

// * Method returns the system uptime in seconds

console.log(`The system uptime is ${(os.uptime / 60 / 60).toFixed(2)} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOS);