var express=require('express');
var app=express();

app.get("/",(req,res)=> {
  res.send (
    "<h1> ADIRA FOODS</h1>"
    +"<hr/>"
    +"<h3>Healthy Stressfree Life</h3>"
    +"<br/>"
    +"<ol>"
    +"<li>RTE Mushroom Dishes</li>"
    +"<li>Crunchy Cookies</li>"
    +"</ol>"
  );
});

app.get("/aboutus",(req,res)=> {
    res.send (
      "<h1> ADIRA FOODS</h1>"
      +"<hr/>"
      +"<h3>Owner : Supriya Parhad-Kadam</h3>"
      +"<br/>"
     
    );
  });
  
var server=app.listen(9000);
console.log("Vijay Sales Online Shopping app running on port 9000");