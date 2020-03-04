//falsy
//false
//0
//undefined
//null
//Nan
//""

//truthy
//'0', ' ', [], {}

//condition
const name = 10
console.log(name || name==0);
if(name){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}