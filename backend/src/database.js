
const mysql = require('mysql');

const connection = mysql.createConnection({


   host: '127.0.0.1',
   user: 'root',
   password: 'root',
   database: 'tweets'
})

connection.connect((errors) => {

   if(errors) {
       throw Error;
       

   }

   console.log("DB Connected Successfully");

});


module.exports = connection;
