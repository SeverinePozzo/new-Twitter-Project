const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./src/database.js');



app.use(cors())
app.use(bodyParser.json())


//you fetch the tasks from the database - all from the Tweets database//
app.get('/tweets', (req, res) => {
    database.query("SELECT * FROM tweets order by id desc;", (errors, result) => {
        if(errors) {
            return res.json({message: 'Something went wrong..'});
        }
       res.json({tweets: result});
       console.log(result);
    });
})



app.post ('/tweet', (req, res) => {
    let tweet = req.body.Value;
    console.log(tweet);
    database.query(`INSERT INTO tweets (tweet) VALUES ('${tweet}');`, (error, result) => {
    if (error) {
      throw new Error;
    }
    res.json({tweets:result});
  });
})

app.delete ('/remove', (req, res) => {
  let tweet = req;
  console.log(tweet);
  return;
  database.query(`DELETE FROM tweets WHERE id=('${tweet.id}')`, (error, result) => {
  if (error) {
    throw new Error;
  }
    res.json({tweets:result});
  });
})

app.listen(3000, () => {
  console.log(`Server is running now on port 3000`)
})

