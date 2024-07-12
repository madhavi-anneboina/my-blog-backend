import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
  },
  {
    name: "learn-node",
    upvotes: 0,
  },
  {
    name: "mongodb",
    upvotes: 0,
  }
];

const app = express();
app.use(express.json());

// app.post('/hello',(req,res) =>{
//     res.send(`Hello! how are you ${req.body.name}`)
// })

// app.get('/hello/:name', (req,res) =>{
//     const {name} = req.params
//     res.send(`hello ${name}`)
// })

app.put("/api/articles/:name/upvote", (req, res) => {
    const {name} = req.params;
    const article = articlesInfo.find(a => a.name === name)
    if(article){
        article.upvotes += 1
     
    }
});

app.listen(8000, () => {
  console.log("server is listening on port 8000");
});
