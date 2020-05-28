let cultTiles= ["Charasmatic Leader", "Relinquished Money and Posesssions", "Brainswashing", 
"Compound", "Changed Names", "Matching Clothes And/Or Hair", "Penalty For Leaving", 
"Seperation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
"Doomsday", "Sex Only With Leader", "Free Sex","No Sex", "Pedophelia", "Physical Abuse", 
"Public Outreach", "Those Who Leave Are Bad Or Evil", "Books, Tv, Etc About Abuse Of Members", 
"Leader Has Sanskrit Name", "Death", "Multiple Groups In Different Locations",
 "Leader Is Incarnation Of God Or Jesus", "Justification Of Anything Leader Deems Necessary", 
 "Yoga And/Or Vegetarian Diet"]


 /* let freeTile= "Free"


function randomBingoCard(array1, array2){
    let itemOne= array1.shift();
    array1.push(itemOne);
    return array1.concat(array2);
} */


function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function newBingoCard(anArray){ 
    let newArray=[];
    let text="";
for(i=0; i<anArray.length+1; i++){
    if (i==12) {
       text = "free";
       newArray.push(text);
    } else{
     newArray.push(cultTiles[getRandom(0, cultTiles.length)]);
    }
    }
return newArray;
} 

//the function above still needs to stuff the results of the else 
//statement into newArray and return it. also, kady says it still 
//won't work after that??


//I need to build a user interface that looks like the bingo card ashley created. I need to 
//write a function that places each string from the array that randomBingoCard returns 
//into an individual "bingo tile" and returns a completed bingo card. I need to insert a 
//button onto the screen that does that every time it is pressed 
//long term goal: make the bingo card interactive, so that you can "push" on a tile
//and it appears crossed out on the screen. 