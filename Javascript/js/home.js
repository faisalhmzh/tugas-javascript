let angkaRandom = Math.floor(Math.random() * 10)+1
let healthPoint = 3


console.log(angkaRandom)


window.onload = () => {
    let button = document.querySelector("#btnGenap");
    let button1 = document.querySelector("#btnGanjil");
 
    button.addEventListener("click", onGenap);
    button1.addEventListener("click", onGanjil);
};


function onGenap(){
    document.getElementById('randomNumber').placeholder=angkaRandom
        if (healthPoint > 0) {
        if  (angkaRandom % 2 == 0){
            alert('Kamu benar')
        } else if (angkaRandom % 2 != 0) {
            if (healthPoint !=1 ) {
                healthPoint -= 1
                alert('Kamu salah, tersisa ' + healthPoint + ' kesempatan lagi')
            } else {
                healthPoint -= 1
                alert('Game Over, health point kamu tersisa ' + healthPoint)
            }
        }
            
        healthPoint = 0 + healthPoint
        document.getElementById('hp').placeholder= healthPoint
    } 
    

}


function onGanjil(){
    document.getElementById('randomNumber').placeholder=angkaRandom
    if (healthPoint > 0) {
        if  (angkaRandom % 2 != 0){
            alert('Kamu benar')
        } else if (angkaRandom % 2 == 0) {
            if (healthPoint !=1 ) {
                healthPoint -= 1
                alert('Kamu salah, tersisa ' + healthPoint + ' kesempatan lagi')
            } else {
                healthPoint -= 1
                alert('Game Over, health point kamu tersisa ' + healthPoint)
            }
        }
            
        healthPoint = 0 + healthPoint
        document.getElementById('hp').placeholder= healthPoint
    } 
}


//     do{
//     if (healthPoint > 0) {
//         if  (angkaRandom % 2 == 0){
//             alert('Kamu benar')
//         } else if (angkaRandom % 2 != 0) {
//             if (healthPoint !=1 ) {
//                 healthPoint -= 1
//                 alert('Kamu salah, tersisa ' + healthPoint + ' kesempatan lagi')
//             } else {
//                 healthPoint -= 1
//                 alert('Game Over, health point kamu tersisa ' + healthPoint)
//             }
//         }
            
//         healthPoint = 0 + healthPoint
//     } 
    
// } 
// while (healthPoint > 0)