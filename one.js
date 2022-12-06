
const USER_nam =["basha"];
const USR_pass = ["basha"];




function usr(){
    let unam = document.getElementById("unam").value;
    let upass = document.getElementById("upass").value;
    let res = "ok basha";
    len = USER_nam.length;
    let data =0,data1=0;
    for(let i=0;i<=len;i++){
        for (unam in USER_nam){
                document.getElementById("res").innerHTML=res;
                data =1;
        }
        for (upass in USR_pass){
            document.getElementById("res").innerHTML=res;
                data1 =1;
        }
    }
    if (data ==1){
        if (data1 == 1){
            console.log("Login success");
        }
        else{
            console.log("PAssword");
        }
    }
    else{
        console.log("Username");
    }
}


function adm(){
    const person = {
        name: "John",
        age: 30,
        city: "New York"
      };
      
      document.getElementById("demo").innerHTML = person;
}