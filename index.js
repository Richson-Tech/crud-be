const express = require("express")
const app = express();

app.listen(3004, () => {
    console.log("server running on port 3004")
});

app.get(("/", (req, res) => {
    res.send("hello from the server")
}))

