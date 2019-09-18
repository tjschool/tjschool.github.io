var respond = document.getElementById('respond');
function message(message, yes, no) {
if(confirm(message) == true){
respond.innerHTML = yes;
}else{
respond.innerHTML = no;
}
};
