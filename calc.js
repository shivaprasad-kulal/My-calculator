function Buttondisplay(val){
     
let x= val;
document.getElementById("display1").innerHTML+=x;
}

function Clear(){
     

    document.getElementById("display1").innerHTML='';


    }

    function solve(){

        let x= document.getElementById("display1").innerHTML;
        let y= eval(x);
        
       document.getElementById("display1").innerHTML=y;
       
    }