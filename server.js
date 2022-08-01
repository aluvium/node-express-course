const express = require('express');
const app = express();
//for POST
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const mockUserData=[
{name:'alice'},
{name:'kate'},
{name:'sonya'}
]

//GET
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

//Unsafe demo POST
app.post('/login', function(req,res){
    //should be encrypted
    const username=req.body.username;
    const password=req.body.password;
    // normaly from DB
    const mockUsername="Katerina";
    const mockPassword="strongPass-lol";
    
    // typically creating token here 
    if (username===mockUsername && password===mockPassword){
        res.json({
	    success: true,
	    message: 'password and username match!',
	    token: 'encrypted token here'
	})
    } 
    else {
        res.json({
            success: false,
            message: 'Username and password don\'t match'
        })
    }
})

//STATIC
app.use(express.static('static'))

//ADMIN
app.get('/admin',middleware.checkToken,function(req,res){

	res.json({
		success:true,
		message:'admin authorized',
		adminData: 'secure data from database'
	})

})

app.listen(8000,function() {
    console.log("Server is running..")
})
