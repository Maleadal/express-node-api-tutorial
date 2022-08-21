const { readFile, writeFile } = require("fs");

const first = readFile(
  "./part3_path/contents/sub-folder/test.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const first = result;

    const second = readFile(
      "./part3_path/contents/sub-folder/test2.txt",
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;
        writeFile(
          "./part3_path/contents/result.txt",
          `Here is the result : ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }

            console.log(result);
          }
        );
      }
    );
  }
);
