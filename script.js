function afficher(){
    var table=document.getElementById("table")
    var nom=document.getElementById("email").value;
    var email=document.getElementById("password").value;

    table.innerHTML=
        "<table border='1' width='100%'>"+
        "<thead>"+
        "<tr><th>email</th><th>password</th></tr>"+
        "</thead>"+
        "<tbody>"+
        "<tr><td>"+nom+"</td><td>"+email+"</td></tr>"+     
        "</tbody>"+
       "</table>"
  

}