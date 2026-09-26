const fs = require("fs");

// fs.readFile("code1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("File read error ", err);
//     return;
//   }
//   console.log("File Data :  ", data);
// });

// fs.writeFile("code1.txt", "Hello from server ", (e) => {
//   if (e) {
//     console.error("Write File Error :  ", e);
//     return;
//   }
//   console.log("file created Successfully ");
// });

// fs.appendFile("code1.txt", "\n Hello from node", (err) => {
//   if (err) throw err;
//   console.log("data appended successfully ");
// });

// fs.rename("code1.txt", "appendFile.txt", (err) => {
//   if (err) throw err;
//   console.log("file rename successfully ");
// });

// fs.unlink("appendFile.txt", (err) => {
//   if (err) throw err;
//   console.log("file deleted successfully ");
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

fs.mkdir("data", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created successfully ");
});
