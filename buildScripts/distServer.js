import express from "express";
import path from "path";
import open from "open";


const port = 3000; 
const app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err); 
  } else {
    open('http://localhost' + port); 
  }
});