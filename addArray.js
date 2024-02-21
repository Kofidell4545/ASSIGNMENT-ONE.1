// function 
// input 
// sum 
// output 

function sumArray(numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++ ){
        total += numbers[i];

    }
    return total;
    
}
const numbers = [2,7,8,7,9];
console.log(sumArray(numbers));