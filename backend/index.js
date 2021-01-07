const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./src/database.js');



app.use(cors())
app.use(bodyParser.json())


//you fetch the tasks from the database - all from the Tweets database//
app.get('/tweets', (req, res) => {
    const tweets = [];
    database.query("SELECT * FROM tweets;", (errors, result) => {
        if(errors) {
            return res.json({message: 'Something went wrong..'});
        }
       res.json({tweets: results}); 
    });
})



app.post ('/tweet', (req, res) => {
    let tweet = req.body.tweet;

    database.query(`INSERT INTO tweets (tweet) VALUES ('${tweet}');`, (error, result) => {
    if (error) {
      throw new Error;
    }

    res.json({tweets:result});
  });
})

app.get ('/tweet', (req, res) => {
  database.query(`DELETE FROM tweets WHERE id=1 limit 1);`, (error, result) => {
  if (error) {
    throw new Error;
  }

  res.json({tweets:result});
});
})

app.listen(3000, () => {
  console.log(`Server is running now on port 3000`)
})

