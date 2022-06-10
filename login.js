var a, b,c;
a =document.getElementById("signInform");
b =document.getElementById("command");
c =document.getElementById("signUp");
function signIn(){
    b.style.display = 'block'; 
    a.style.display = 'none';
    c.style.display = 'none';

    
}
function command(){
    a.style.display ='block';
    b.style.display ='none';
    c.style.display = 'none';
}
function signUp(){
    c.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';


}