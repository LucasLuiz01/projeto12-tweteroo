import express from "express";
const usuarios = [];
const app = express();
app.use(express.json());

app.post("/sign-up", (res, req) => {
usuarios.push(req.body);
res.send("ok");
})

app.listen(5000);