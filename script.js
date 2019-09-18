function message(message, yes, no) {
var respond = document.getElementById('respond');
if(confirm(message) == true){
respond.innerHTML = yes;
}else{
respond.innerHTML = no;
}
};
