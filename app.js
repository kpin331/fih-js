const exp = require("express");
const app = exp();

app.get("/", (req, res) => {
    res.send("hai");
});

app.listen(3000, () => console.log("server berjalan"));