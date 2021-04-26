/*
tranche A: de 0 à 10064€
tranche B: de 10065 à 25659€
tranche C: de 25660 à 73369€


focus color sur les champs*/


var rev = document.querySelector('.revenus');


rev.addEventListener('focus', function () {
    rev.style.backgroundColor = 'yellowgreen';
})
rev.addEventListener('blur', function () {
    rev.style.backgroundColor = '#fff';
})
var imp = document.querySelector('.impot');
imp.value = '';
imp.addEventListener('focus', function () {
    imp.style.backgroundColor = 'red';
})
imp.addEventListener('blur', function () {
    imp.style.backgroundColor = '#fff';
})
var rest = document.querySelector('.reste');
rest.value='';
rest.addEventListener('focus', function () {
    rest.style.backgroundColor = 'yellowgreen';
})
rest.addEventListener('blur', function () {
    rest.style.backgroundColor = '#fff';
})

function afficher(){
    //stock la valeur contenue dans le champ "revenus" dans la varriable "leRest"et l'affiche
var leRest=document.querySelector('.revenus').value;
//puis la convertie en number dans la varriable"leRestNum"
var leRestNum = parseInt(leRest,10);

//création d'une varriable "pourcent" en fonction du revenu
if (leRestNum>=0 && leRestNum<10064){
    var pourcent = 0;
}else if(leRestNum>=10065 && leRestNum<25659){
    var pourcent =(leRestNum-10065)/ 100*11;

}else if(leRestNum>=25660 && leRestNum<73369){
    var pourcent =(leRestNum-25660+1715)/ 100*30;
}else if(leRestNum>73369  && leRestNum<157806){
    var pourcent =(leRestNum-73369+1715.34+30081)/ 100*41;
}
else if(leRestNum>157806){
    var pourcent =(leRestNum-73369+1715.34+30081)/ 100*45; 
}
//stocke la valeur de l'impot aprés calcul dans la varriable "imp"et l'affiche
var nbChild = document.querySelector('.nbChild').value;
var nbChildNum= parseInt(nbChild,10);


var married=document.querySelector('.married').value;
if (married==="yes"){
    var imp=document.querySelector('.impot').value= pourcent/(2+nbChildNum);
}else{
var imp=document.querySelector('.impot').value= pourcent/(1+nbChildNum);
}

/*********************************************************** */
//stock en varriable et affiche le reste après opération
/********************************************************* */
var rest=document.querySelector('.reste').value=leRestNum-imp;
document.querySelector('.revenus').style.backgroundColor='yellowgreen';
document.querySelector('.impot').style.backgroundColor='red';
document.querySelector('.reste').style.backgroundColor='lightblue';
console.log(typeof(leRestNum)+"" +leRestNum);
console.log(typeof(imp)+"" +imp);
console.log(typeof(rest)+"" +rest);
console.log(pourcent);

console.log(married);
console.log(typeof(nbChildNum)+" " +nbChildNum);
}




