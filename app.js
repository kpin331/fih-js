const readline = require("readline");
const ch = require("chalk")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("teks: ", (txt) => {
    console.log(ch.red("hai"))
    rl.close();
})