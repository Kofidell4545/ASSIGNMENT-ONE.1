// function 
// input 
// sum 
// output 

function sumArray(numbers) {
    let all = 0;
    for(let i = 0; i < numbers.length; i++ ){
        all += numbers[i];

    }
    return all;
    
}
const numbers = [2,7,8,7,9];
console.log(sumArray(numbers));