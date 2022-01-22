let express = require("express");
let bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("server has started on port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    num1 = num1/100;
    num1 = num1 * num1;

    let result = num2/num1;

    res.send(`<h1>Your BMI is: ${result}</h1>`);
})