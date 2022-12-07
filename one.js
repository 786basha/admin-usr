
let USER_nam =["basha","king"];
let USR_pass = ["basha"];




function usr(){
    // let unam = document.getElementById("unam").value;
    // let upass = document.getElementById("upass").value;
    // let res = "ok basha";
    // len = USER_nam.length;
    // let data =0,data1=0;
    // for(let i=0;i<=len;i++){
    //     for (unam in USER_nam){
    //             document.getElementById("res").innerHTML=res;
    //             data =1;
    //     }
    //     for (upass in USR_pass){
    //         document.getElementById("res").innerHTML=res;
    //             data1 =1;
    //     }
    // }
    // if (data ==1){
    //     if (data1 == 1){
    //         console.log("Login success");
    //     }
    //     else{
    //         console.log("PAssword");
    //     }
    // }
    // else{
    //     console.log("Username");
    // }

    alert("Invalid details entered..!");
    window.location.href = "/html/fun.html";

}


function adm(){
    alert("Invalid details entered..!");
    window.location.href = "/html/fun.html";
}


function Add(){
    let i, len, text,vvv;
    vvv=6;
    let lenerr = "Minminux size required";
    len = USER_nam.length;
    document.getElementById("req").innerHTML=len;
    let addnam = document.getElementById("addusr").value;

    let bk = "Already exists...";

    for (i = 0, len, text = ""; i < len; i++) {
        if (USER_nam[i] == addnam){
            document.getElementById("req").innerHTML=bk;
            Add();
        }
        if(addnam.length < vvv)
        {
            document.getElementById("req").innerHTML=lenerr;
            Add();
        }
        
    }
    
    USER_nam.push(addnam);
}

function show(){
    let i, len, text;
    for (i = 0, len = USER_nam.length, text = ""; i < len; i++) {
        text += USER_nam[i] + "<br>";
    }
    document.getElementById("dis").innerHTML = text;
}