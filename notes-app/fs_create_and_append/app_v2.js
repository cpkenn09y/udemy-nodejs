const fs = require("fs");
fs.writeFileSync("notes.txt", "This file was created by Node.js");

let fd;
console.log("doing stuff");
try {
  console.log("about to do cool things");
  /*
    openSync: A cool usage is that it can handle opening an existing file or creating a new file all as one command... followed by appending to it
  */
  fd = fs.openSync("notes.txt", "a");
  console.log("completed open sync");
  fs.appendFileSync(fd, "...append this data", "utf8");
  console.log("completed doing cool things");
} catch {
  console.log("error");
  /* handle error */
} finally {
  console.log("finally");
  if (fd !== undefined) fs.closeSync(fd);
}
