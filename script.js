/*let name="Nandini";
var age=18;
const height="1.72";
console.log(age); 
console.log(age+5);
console.log(age-3);
console.log(age*2);
console.log(age/2);
console.log(age%2);
age+=3;
console.log(age);
age-=3;
console.log(age);
age*=3;
console.log(age);
age/=3;
console.log(age);
age%=3;
console.log(age);
let age1=30;
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
let food  = "Biryani";
let break_fast="Idly";
let food2 = "Idly";
let food3 = "pongal";
let food4 = "Poori";
let food5 = "Dosa";
if (food1==break_fast) {
  console.log("It's nice to have Biryani as in the Breakfast");
}
else if(food2==break_fast) {
  console.log("It's nice to have Idly as in the Morning");
}
for(let i=1;i<=30;i++)
{
  console.log("Day "+i+" completed");
  i++;
}
let user_name="Nandini";
let password="Nandini@123";
let name="nandhu";
let pin="nandhu@123";
name_1="mounika";
pin_1="mounika@123";
if(name=="nandhu"){
  console.log(user_name);
  if(pin=="nandhu@123");
  {
    console.log("loged in successfully");
  }
  for(i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
      console.log(i+" X "+j+" = "+(i*j));
    }
  }
}*/
/*function cook()
{
  console.log("Pour the flour in  pawa");
  console.log("Rub it round with gareta");
  console.log("spill some oil above it  then wait");
  console.log("twist it with dosa gareta");
  console.log("atlast gently serve it to someone");
}
for(let i=1;i<=5;i++){
  cook();}
  function dishwash(vessels){
    console.log("we have to wash "+vessels+" vessels");
  }
  dishwash(2);
  function num(n)
  {
    if(n>10){
      return;
    }
    console.log(n);
    n+=1;
    num(n);
  }
  num(1);*/
 /* function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);*/
let chocolate=["Melodi","Fivestar","kitkat","kachamango","darkchocolate","alphenlebe"];
let sales={
  nandini:chocolate[0],
  tejasree:chocolate[1],
  mounika:chocolate[2],
  shalini:chocolate[3],
};
console.log(sales.mounika);
