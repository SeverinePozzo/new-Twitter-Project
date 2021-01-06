const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//you fetch the tasks from the database and set tasks from the front end
const tweets = [
{app.get('/tweets', (req, res) => {
    const tweets = [];
    database.query("SELECT * tweet, id, name FROM tweets;", (errors, result) => {
        if(errors) {
            return res.json({message: 'Something went wrong..'});
        }
        tweets = result;
    });
    res.json(tweets);
});
    
}
]
//return the data back to the client
  res.json(tweets)
});


App.post (/tweet, {req, res} => {
    let tweet = req.body.tweet;

    database.query(`INSERT INTO tweets (tweet) VALUES ('${tweet}');`);

    res.json({message: "Task saved"});

})

app.listen(3000, () => {
  console.log(`Server is running now on port 3000`)
})
