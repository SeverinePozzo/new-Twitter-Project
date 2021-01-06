const express = require('express')
const app = express()
const database = require('./src/database.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//you fetch the tasks from the database - all from the Tweets database
const tweets = [
app.get('/tweets', (req, res) => {
    const tweets = [];
    database.query("SELECT * FROM tweets;", (errors, result) => {
        if(errors) {
            return res.json({message: 'Something went wrong..'});
        }
       res.json({tweets: results}); 
    });
})
]


app.post ('/tweet', (req, res) => {
    let tweet = req.body.tweet;

    database.query(`INSERT INTO tweets (tweet) VALUES ('${tweet}');`);
    if (error) {
      throw new Error;
    }

    res.json({message: "Task saved"});

})

app.listen(3000, () => {
  console.log(`Server is running now on port 3000`)
})
