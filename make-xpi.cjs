const path = require("path");
const zip = require("cross-zip");

const outfile = path.join(__dirname, process.argv[2]);
process.chdir("dist");
zip.zipSync(".", outfile);
