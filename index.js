import express from "express";
import cors from "cors";
const usuarios = {};
const tweets = [];
const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  usuarios[username] = avatar;
  res.status(201).send("OK");
  return;
});
app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  tweets.push(req.body);
  res.status(201).send(tweets);
  return;
});

app.get("/tweets", (req, res) => {
//   tweets = [
//     { username: "bobesponja", tweet: "eu amo o hub" },
//     { username: "bobesponja", tweet: "eu am o hub" },
//     { username: "bobesponja", tweet: "eum o hub" },
//   ];
//   usuarios = {
//     bobesponja:
//       "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//   };

  const lastTweets = tweets.slice(-10);

  let ret = [];
  for (let tweet of lastTweets) {
    const avatar = usuarios[tweet.username];

    if (!avatar) {
        continue;
    }

    ret = [...ret, { ...tweet, avatar: avatar }];
  }

  res.status(200).send(ret);
});

app.listen(5000);
