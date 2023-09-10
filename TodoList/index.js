import express from "express";
import bodyParser from "body-parser";

let app = express();
let port = 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
let dateTime = "";
let Text = "";
let array1 = [];
let dateTimeForWork = "";
let TextForWork = "";
let array1ForWork = [];
let getMonth;
let getDay;
let getYear;
let DATE;

dateTime = new Date();
getMonth = dateTime.toLocaleString('default', {
    month: 'long',
    });
getDay = new Date().getDate();
getYear = new Date().getFullYear();
DATE = getDay + " " + getMonth + " " + getYear;

///////////////////////////////////////////////////////////////
app.get("/" , function(req , res){
    res.render("today.ejs" , {
        dateTime : "Enter Chores Here!",
        Text : Text,
        array1 : array1,
    });
});
app.get("/today" , function(req , res){
    res.render("today.ejs" , {
        dateTime : "Enter Chores Here!",
        Text : Text,
        array1 : array1,
    });
});
app.get("/work" , function(req , res){
    res.render("work.ejs" , {
        dateTime : "Enter Chores Here!",
        Text : TextForWork,
        array1 : array1ForWork,
    });
});
app.post("/submit1" , function(req ,res){
    Text = req.body.inputed;
    array1.push(Text);
    //console.log(getDay , getMonth , getYear);
    console.log("Entered Text:" ,  array1);
    res.render("today.ejs" , {
        dateTime : DATE,
        Text: Text,
        array1 : array1,
    });
});
app.post("/submit2" , function(req ,res){
    TextForWork = req.body.inputed;
    array1ForWork.push(TextForWork);
    console.log("Entered Text:" ,  array1ForWork);
    res.render("work.ejs" , {
        dateTime : DATE,
        Text: TextForWork,
        array1 : array1ForWork,
    });
});
/////////////////////////////////////////////////////////////////////////////////
app.listen(port , function(){
    console.log("Server is listening to port: " , port);
})