import express from "express";
import todosRoutes from "./routes/todos";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.json()); // an importnat note is that, this app.use has to be put first always
// and other app.use come after.
app.use(todosRoutes);

app.listen(3000, () => {
  console.log("Connected to PORT 3000 successfully!");
});
