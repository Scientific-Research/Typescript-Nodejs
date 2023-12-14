import express from "express";
import todosRoutes from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

app.use(todosRoutes);
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Connected to PORT 3000 successfully!");
});
