const bonus = 20;
function scope(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;

    
}
const output = scope(12, 32);
console.log(output);