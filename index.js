const http = require("http");

const Router = require('./framework/Router')
const PORT = process.env.PORT || 5000;



const router = new Router();
router.get("/users", (req, res) => {
  res.end("You send request to /Users");
});

router.get("/posts", (req, res) => {
  res.end("You send request to /POSTS");
});

const server = http.createServer((req, res) => {

});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
