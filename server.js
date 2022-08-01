const express = require('express');
const app = express();
const mockUserData=[
{name:'Alice'},
{name:'Kate'},
{name:'Sonya'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'Succesfully got users',
 	 	users: mockUserData
 	})
})

app.listen(8000,function() {
  console.log("Server is running..")
})
