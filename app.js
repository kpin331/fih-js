const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("apa nama anda tuan. ", (nama) => {
    console.log(`halo ${nama}, anda ###`);
    rl.close();
});