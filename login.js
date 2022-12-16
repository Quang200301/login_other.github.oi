var username=["quang","tu","ty"];
var password=["123","456","789"];
function mylogindata()
{
    var usernames=document.getElementById("user").value;
    var passwords=document.getElementById("pw").value;
    var kq="";
    for( let i=0;i<username.length; i++)
    {
        if(usernames == username[i] && passwords== password[i]){
            location.href = "https://docs.google.com";
        }
        else{
            kq="o!";
            
        }
        break;
    }
 document.getElementById("kq").innerHTML =kq; 
}


// function Cancel()
// {
//     document.getElementById("User").value="";
//     document.getElementById("Pw").value="";
//     document.getElementById("User").focus();
// }