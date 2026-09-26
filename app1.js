const fs = require("fs");

// fs.readFile("code1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("File read error ", err);
//     return;
//   }
//   console.log("File Data :  ", data);
// });

// fs.writeFile("code1.txt", "Hello from node.js", (e) => {
//   if (e) {
//     console.error("Write File Error :  ", e);
//     return;
//   }
//   console.log("file created Successfully ");
// });

// try {
//   fs.writeFileSync("code2.txt", "Hello from SyncFile ");
//   console.log("File Write Successfully ");
// } catch (err) {
//   console.error("file write error :  ", err);
// }
// try {
//   const data = fs.readFileSync("code2.txt", "utf-8");
//   console.log("File Read Successfully ", data);
// } catch (err) {
//   console.error("file Read error :  ", err);
// }
