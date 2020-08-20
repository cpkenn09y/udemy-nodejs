const fs = require("fs");
fs.writeFileSync("notes.txt", "v3: This file was created by Node.js");
fs.appendFileSync("notes.txt", "...append this data", "utf8");
