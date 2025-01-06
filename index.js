const tasks = [
  { id: 1, task: "Complete React project" },
  { id: 2, task: "Study for Graph Theory exam" },
  { id: 3, task: "Write blog post on Docker" },
  { id: 4, task: "Finalize donation website design" },
  { id: 5, task: "Prepare resume for job fair" },
];

import express from "express";
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.status(200).send(tasks);
  // console.log('first api')
  // res.send('this is response')
});

app.post("/", (req, res) => {
  console.log("first api");
  res.send("this is response from post request");
});

app.put("/", (req, res) => {
  console.log("first api");
  res.send("this is response from put request");
});

app.delete("/", (req, res) => {
  console.log("first api");
  res.send("this is response from delete request");
});

app.listen(PORT, () => console.log("port is running"));
