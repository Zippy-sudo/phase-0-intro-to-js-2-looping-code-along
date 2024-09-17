const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
return gifts;
}

const nameList = ["Eva", "Paul", "Barbara"];
const greetings = [];
function writeCards(arr, event){
for (let x = 0; x < arr.length; x++) {
    greetings.push(`Thank you, ${arr[x]}, for the wonderful ${event} gift!`);
}
return greetings;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
