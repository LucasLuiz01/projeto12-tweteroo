import express from "express";
const usuarios = [];
const tweets = [];
const app = express();
app.use(express.json());

app.post("/sign-up", (req, res) => {
usuarios.push(req.body);
res.status(201).send("ok login");
return;
})
app.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.status(201).send("ok tweeter");
    return;
})

app.get("/tweets", (req, res) => {
  
    res.send(tweets.slice(-10));
    console.log(username, tweet);
})

app.listen(5000);