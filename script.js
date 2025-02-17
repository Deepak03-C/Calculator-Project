function clr() {
  document.getElementById("input").value = "";
}
function back() {
  let val = document.getElementById("input").value;
  document.getElementById("input").value = val.substring(0, val.length - 1);
}

function show(val) {
  document.getElementById("input").value += val;
}

function operation() {
  document.getElementById("input").value = eval(
    document.getElementById("input").value
  );
}

document.addEventListener("keydown", function (event) {
  let allowedKeys = "0123456789+-*/%";
  let eq = "=";
  let backspace = "Backspace";
  let deleteval = "Delete";

  if (allowedKeys.includes(event.key)) {
    document.getElementById("input").value += event.key;
  }
  if (eq.includes(event.key)) {
    operation();
  }
  if (backspace.includes(event.key)) {
    back();
  }
  if (deleteval.includes(event.key)) {
    clr();
  }
});

let weightrange = document.getElementById("weightrange");
let weightvalue = document.getElementById("weightvalue");
weightvalue.innerHTML = weightrange.value + " kg";

weightrange.oninput = function () {
  weightvalue.innerHTML = this.value + " kg";
};

let heightrange = document.getElementById("heightrange");
let heightvalue = document.getElementById("heightvalue");
heightvalue.innerHTML = heightrange.value + " cm";

heightrange.oninput = function () {
  heightvalue.innerHTML = this.value + " cm";
};

function calculateBMI() {
  var weight = document.getElementById("weightrange").value;
  var height = document.getElementById("heightrange").value;

  var bmi = parseInt(weight / (height / 100) ** 2);
  var category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("percent").textContent = bmi;
  document.getElementById("data").textContent = category;
  document.getElementById("data").style.fontWeight = "bold";

  if (category == "Underweight") {
    document.getElementById("data").style.color = "red";
  } else if (category == "Normal weight") {
    document.getElementById("data").style.color = "green";
  } else if (category == "Overweight") {
    document.getElementById("data").style.color = "gold";
  } else {
    document.getElementById("data").style.color = "brown";
  }
}

function clacview() {
  document.getElementById("calculatormaindiv").style.display = "block";
  document.getElementById("bmimaindiv").style.display = "none";
  document.getElementById("agecalculatormaindiv").style.display = "none";
  document.getElementById("loancalculatormaindiv").style.display = "none";
}

function bmiview() {
  document.getElementById("bmimaindiv").style.display = "block";
  document.getElementById("calculatormaindiv").style.display = "none";
  document.getElementById("agecalculatormaindiv").style.display = "none";
  document.getElementById("loancalculatormaindiv").style.display = "none";
}
function agecalview() {
  document.getElementById("bmimaindiv").style.display = "none";
  document.getElementById("calculatormaindiv").style.display = "none";
  document.getElementById("agecalculatormaindiv").style.display = "block";
  document.getElementById("loancalculatormaindiv").style.display = "none";
}
function loancalview() {
  document.getElementById("bmimaindiv").style.display = "none";
  document.getElementById("calculatormaindiv").style.display = "none";
  document.getElementById("agecalculatormaindiv").style.display = "none";
  document.getElementById("loancalculatormaindiv").style.display = "block";
}

function calculateage() {
  let dateval = document.getElementById("dates").value;
  let date = new Date(dateval);
  let bdate = date.getDate();
  let bmonth= date.getMonth();
  let byear = date.getFullYear();

  let currentdate = new Date();
  let todaydate = currentdate.getDate();
  let todaymonth = currentdate.getMonth();
  let todayyear = currentdate.getFullYear();

  let finaldate,finalmonth,finalyear;

  finalyear=todayyear-byear;
  if(todaymonth>bmonth){
    finalmonth=todaymonth-bmonth;
  }
  else{
    finalyear--;
    finalmonth=12+todaymonth-bmonth;
  }

  if(todaydate>bdate){
    finaldate=todaydate-bdate;
  }
  else{
    finalmonth--;
    finaldate = getDaysInMonth(byear,bmonth) + todaydate-bdate;
  }
  if(finalmonth < 0)
    {
        finalmonth = 11;
        finalyear--;
    }

    let data=document.getElementById("agedata");
    data.innerHTML=`Your age is ${finalyear} years and ${finalmonth} months and ${finaldate} days `;

    function getDaysInMonth(year, month){
      return new Date(year, month, 0).getDate();
  }
}

function calculateloan(){
  let amount = document.getElementById("amount").value;
  let intrestrate = document.getElementById("intrestrate").value;
  let months = document.getElementById("days").value;

  let intrest = (amount * (intrestrate * 0.01)) / months;
  let total = ((amount / months) + intrest).toFixed(2);

  document.getElementById("emi").innerHTML=`<b>EMI : </b> Rs:${total}`;

}





