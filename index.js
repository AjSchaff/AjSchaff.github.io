const express     = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const exphbs      = require('express-handlebars')

const app         = express()
const port        = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})