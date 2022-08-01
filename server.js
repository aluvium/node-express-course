const express = require('express');
const app = express();
const mockUserData=[
{name:'alice'},
{name:'kate'},
{name:'sonya'}
]

app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'Succesfully got users',
 	 	users: mockUserData
 	})
})
app.get('/users/:id', function(req,res){
        console.log(req.params.id)
	res.json({
		success: true,
		message: 'Got one user',
		users: req.params.id
	})
})

app.listen(8000,function() {
  console.log("Server is running..")
})
