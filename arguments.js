//Arguments
function addNumber(num1, num2, num3){
    console.log([...arguments]);
    return num1 + num2 + num3 + arguments[3]
}
const output = addNumber(20, 12, 27, 34);
console.log(output);