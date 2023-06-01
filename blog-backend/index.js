const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let dbConfig = {
  /* Notice! These are here for demo purposes. DO NOT COMMIT YOUR INFO to version control*/
  client: "mysql",
  connection: {
    user: "root",
    password: "",
    database: "gae-demo-db",
  },
};

if (process.env.NODE_ENV == "production") {
  dbConfig.connection.socketPath = process.env.GAE_DB_ADDRESS;
} else {
  dbConfig.connection.host = "127.0.0.1";
}

const knex = require("knex")(dbConfig);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/db-demo", async (req, res) => {
  const result = await knex.select().table("exampletable");
  res.json(result);
});
app.post("/db-demo/post", async (req, res) => {
  const insertedRows = await knex('exampletable').insert({ content: req.body.content , title: req.body.title , date: req.body.date ,})
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
