
import express from 'express';
import path from 'path';
import { pagesRouter } from "./routes/pagesrouter";
import { staticsRouter} from "./routes/staticrouter";

const app = express();
const port = 3000;

//app.set('views', path.join(__dirname, 'dist/views'));
app.set('view engine', 'pug');

app.use(pagesRouter());
app.use(staticsRouter());

console.log("Ready to start the server");

app.listen(port, () => console.log(`App running at ${port}`));