function submission(event)
{
    
    event.preventDefault(); 
    var flag=0;
    var ph=document.getElementById("phno");
    // var phone=/^\d{10}$/;
    // if(!(ph.value.match(phone)))
    // {
    //  alert("enter the valid phno");
    //  ph.focus();
    //  flag=1; 
    // } 
    if(document.getElementById("name").value=="")
    {
        alert("enter the valid name");
        document.getElementById("name").focus();
        flag=1;
    }  
    if(document.getElementById("mail").value=="")
    {
        alert("enter the valid e-mail");
        document.getElementById("mail").focus();
        flag=1;
    }    
    if(document.getElementById("pass").value=="")
    {
        alert("enter the password");
        document.getElementById("pass").focus();
        flag=1;
    }  
    if(flag==0)
    {
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("phno").value);
        console.log(document.getElementById("mail").value);
        location.href="index5.html";
    }   
}
a=[];
function add(event)
{
    event.preventDefault();
    var c={
                "name":document.getElementById("name").value,
                "phno":document.getElementById("phno").value,
                "place":document.getElementById("place").value
          }
          a.push(c);
          console.log(a);     
}