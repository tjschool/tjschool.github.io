function(message, yes, no) {
var respond = getElementById('respond');
if(confirm(message) == true){
respond.innerHTML = yes;
}else{
respond.innerHTML = no;
}
};
