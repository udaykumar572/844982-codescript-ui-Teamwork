var trainerpreference="";

var fitnessArray=[];

function funM()

{

  trainerpreference=document.getElementById("chkYes").value

}

function funF()

{

  trainerpreference=document.getElementById("chkYes1").value

}

function funN()

{

  trainerpreference=document.getElementById("ChkNo").value

}



function fitnessTracker(){









  var fitness=



  {

    firstname:document.getElementById("firstname").value+" "+ document.getElementById("lastname").value,

    address:document.getElementById("address").value,

    city:document.getElementById("city").value,

    p1:document.getElementById("first").value,

    p2:document.getElementById("second").value,

    p3:document.getElementById("third").value,

    p4: document.getElementById("fourth").value,

   p5:document.getElementById("fifth").value,

   p6:document.getElementById("sixth").value,

   p7:document.getElementById("seventh").value,

   p8:document.getElementById("eighth").value,

   p9: document.getElementById("ninth").value,

   p10:document.getElementById("tenth").value,

   package:document.getElementById("inr").value,

  trainerpreference:trainerpreference

  };



  if(fitness.firstname !== "" && fitness.address !== "" && fitness.city!== "")





  {

    fitnessArray = JSON.parse(localStorage.getItem("fitness")) || [];

    fitnessArray.push(fitness);

    localStorage.setItem("fitness",JSON.stringify(fitnessArray));



    window.open('views.html');



  }



}




