
//let backpack = [];

//let iteamCount = backpack.length;
//console.log(iteamCount)

//backpack.push(' great ball','antidote','revive')


//let satchel = backpack.splice(2,3)
//console.log(backpack.length)



// if(backpack.length >=2){

//     console.log("hit 3 statements")
//     for (let i =0 ;i < 3 ;i++){
//         console.log(backpack[i])
        
//     }
// } else {
//     for (let i =0 ;i < backpack.length;i++){
//         console.log(backpack[i])
//         console.log(backpack.length)
//     }
// }




//console.log(backpack)



let guessMe=54 

while (guessMe < 100){
    if(guessMe % 4 === 0 || guessMe % 5 === 0){
        guessMe+=25
    
    }else if (guessMe % 3===0){
        guessMe -= 27
    } else {
        guessMe +=3
    }
    guessMe +=22
}
console.log("final value",guessMe)

