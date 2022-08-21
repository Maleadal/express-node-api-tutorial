const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync(
  "./part3_path/contents/sub-folder/test.txt",
  "utf-8"
);
const second = readFileSync(
  "./part3_path/contents/sub-folder/test2.txt",
  "utf-8"
);

writeFileSync(
  "./part3_path/contents/result.txt",
  `Here is the result : ${first}, ${second}`
);
