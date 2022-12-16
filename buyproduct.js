var data= new Array();
function savedata(){
    var  a,b,c,d,e;
    a=document.getElementById("fn_c").value;
    if (a==""){
        alert("Full name much not blank!")
    }
    b=document.getElementById("ID_Pro").value;
    if(b==""){
        alert("ID_Pro much not blank!")
    }
    c=document.getElementById("Name_pro").value;
    if (c==""){
        alert("Name pro much not blank!")
    }
    d=document.getElementById("q_p").value;
    if (d==""){
        alert("Quantity much not blank!")
    }
    e=document.getElementById("Price_pro").value;
    if(e==""){
        alert("Price_pro much not blank!")
    }
    data.push({Fullname_cus:a,ID_Pro:b,Name_pro:c,q_p:d,Price_pro:e});
}

function showdata() {
    var row='';
    for (i in data) {
        var n=i;
        n++;
        row +="<tr>";
        row += "<td>"+ n + "</td>";
        row += "<td>"+ data[i].Fullname_cus + "</td>";
        row += "<td>"+ data[i].ID_Pro + "</td>";
        row += "<td>"+ data[i].Name_pro + "</td>";
        row += "<td>"+ data[i].q_p + "</td>";
        row += "<td>"+ data[i].Price_pro + "</td>";
        row += "<td>"+ 1 + "</td>";
        row += "<td>"+ 2+ "</td>";
        row += "<td>"+ parseFloat(data[i].q_p)*parseFloat(data[i].Price_pro)+ "</td>";
        row += "</tr>";
    }
    document.getElementById("tbl").innerHTML=row;
}

function reset(){
    window.location.reload();
    
}