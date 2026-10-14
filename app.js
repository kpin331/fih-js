const readline = require("readline");
const fig = require("figlet")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("teks: ", (txt) => {
    const ar = fig.textSync(`${txt}`);
    console.log(ar);
    rl.close();
})