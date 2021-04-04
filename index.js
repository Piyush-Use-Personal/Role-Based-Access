import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from "./routes/index.js";
const app = express();

const PORT = 8080;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/api', apiRouter)
// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// default route
app.use((req, res) => {
    res.status(404).send({
        message : 'URL Not found!'
    })
})

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
