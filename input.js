let greetings=["Good Morning","Good Afternoon","Good Evening","Good Night"];
let num=0;
function greet_afternoon(){
    let text = document.getElementById("greet");
    text.innerText=" Good Afternoon";
    num+=1;
    if(num>3){num=0;}
}
function turn_on(){
    let light = document.getElementById("on");
    light.src="https://images.stockcake.com/public/4/a/3/4a3162de-410e-483c-9241-3ad1807c4719_large/turning-on-light-stockcake.jpg";
}
function turn_off(){
    let light = document.getElementById("on");
    light.src="https://media.istockphoto.com/id/523616495/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=pjv-wWMBRNvnE5G68k5CWe6id34gkvxkMleizCj1AYM=";
}
function change_color(){
    let color = document.getElementById("cap");
    color.style.backgroundColor="black";
    let txt1 = document.getElementById("Data");
    txt1.style.color="White";
    let txt2 = document.getElementById("greet");
    txt1.style.color="black";
}