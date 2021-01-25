var csv = require("fast-csv");
const { Readable } = require("stream");
var str = Readable.from([" , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -"]);

str.pipe(csv.parse({ignoreEmpty: true, delimiter: "\t"})).on("data", (d) => console.log(d));