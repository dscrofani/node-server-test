const express = require('express')
const app = express()
const port = 3000

//any time a GET request comes in for the root "/" just
// automatically send the file index.html which I assume is in public folder
//the following line will serve all content from /public when asked for
app.use(express.static('public'));  
app.use(express.json());

app.post('/talkback', (req,res)=> {
  console.log(req.body)
  //implement some logic to verify the users identity
  //lookup the user in your database using their username ie req.body.user
  //if I find the user then I check the password req.body.password
  //If everything matches then I send them on to another page or I send them data
  
  res.send("I am answering you");
})

app.get('/hello', (req, res) => {
  res.send('nice to meet you')
})

app.get('/foo/bar', (req, res) => {
  res.send('bah-bat')
})

app.get('/goodbye', (req, res) => {
    res.send('see you later')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})