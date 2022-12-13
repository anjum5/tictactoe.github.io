console.log("Welcome to Game");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameOver=new Audio("gameover.mp3");
let turn= "X";
let isgameover=false;

//function to change turn
 const changeTurn =()=>{
    return turn === "X"? "0" :"X"
 }
 //function to check WIn
 const checkWin=()=>{
    let boxtext=document.getElementsByClassName("box-text");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML)&&(boxtext[e[2]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !=="")){
            document.querySelector(".info").innerHTML=boxtext[e[0]].innerHTML+" won"
            isgameover="true";
            gameOver.play();
            document.querySelector(".img-box").getElementsByTagName("img")[0].style.width= "200px";
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
         
        }
    })

 }
//game logic
// music.play();
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.box-text');
    // console.log(boxtext.innerHTML);
    element.addEventListener('click', ()=>{  
       if(boxtext.innerHTML===""){
        boxtext.innerHTML=turn;
        turn=changeTurn();
        // audioturn.play();
        checkWin();
        if(!isgameover){
            document.getElementsByClassName("info")[0].innerHTML="turn for   "+  turn;

        }
       
        // console.log("clicked");
       }
        

    })
 })

 //for reset

 reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".box-text");
    Array.from(boxtext).forEach((element)=>{
        element.innerHTML=""
        turn="X"
        isgameover=false;
        document.getElementsByClassName("info")[0].innerHTML="turn for   "+  turn;
        document.querySelector(".img-box").getElementsByTagName("img")[0].style.width= "0px";
        document.querySelector(".line").style.width="0vw";


    })
 })
