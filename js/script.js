//I need to build a user interface that looks like the bingo card ashley created. I need to 
//write a function that places each string from the array that randomBingoCard returns 
//into an individual "bingo tile" and returns a completed bingo card. I need to insert a 
//button onto the screen that does that every time it is pressed 
//long term goal: make the bingo card interactive, so that you can "push" on a tile
//and it appears crossed out on the screen. 

let cultTiles= ["Charasmatic Leader", "Relinquished Money and Posesssions", "Brainswashing", 
"Compound", "Changed Names", "Matching Clothes And/Or Hair", "Penalty For Leaving", 
"Seperation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
"Doomsday", "Sex Only With Leader", "Free Sex","No Sex", "Pedophelia", "Physical Abuse", 
"Public Outreach", "Those Who Leave Are Bad Or Evil", "Books, Tv, Etc About Abuse Of Members", 
"Leader Has Sanskrit Name", "Death", "Multiple Groups In Different Locations",
 "Leader Is Incarnation Of God Or Jesus", "Justification Of Anything Leader Deems Necessary", 
 "Yoga And/Or Vegetarian Diet"];

// function randomBingoCard(array1, array2){
//     let itemOne= array1.shift();
//     array1.push(itemOne);
//     return array1.concat(array2);
// } 

// function stuffBingoCard(){
//     elementCounter= 0;
//     for (i=0; i<25; i++){
//         elementCounter= elementCounter+1;
//         document.getElementById("elementCounter").innerHTML = getFirstElement(cultTiles);

//     }
// }

function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function tileset(anArray){ 
    // A function to generate 24 randomized tiles, including a "free" space
    // todo: prevent duplicate tiles
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

function getFirstElement(anArray){
    newArray=(newBingoCard(anArray));
    return newArray.shift(0);
}

function buildAndPlaceTile(tile){
    // then make a td with the given text

        //         getFirstElement(newBingoCard(cultTiles));
    // then shove the td into the tr

}

function findOrCreateTr(tileNumber, flavor) {}
    bingoTable = document.getElementById(`${flavor}-card`)
    tbody = bingoTable.children[0];
    
    if (tbody.childElementCount == 0) {
        // if there is no row, you create a new row
        tr = tbody.appendChild('tr');
    } else if (i<5) { // oh glob this is awful, do it with math
        // otherwise, return the first row
        tr = tbody.children[0];
    } else if ((i>=5) && (i<10)) {
        if (tbody.childElementCount == 1) {
            // if there is only one row, you create a new row
            tr = tbody.appendChild('tr');
        } else {
            // otherwise, return the second row
            tr = tbody.children[1];
        }
    } else if ((i>=10) && (i<15)) {
        if (tbody.childElementCount == 2) {
            //  create a new row
            tr = tbody.appendChild('tr');
        } else {
            // otherwise, return the third row
            tr = tbody.children[1];
        }
    } else if ((i>=15) && (i<20)) {
        if (tbody.childElementCount == 3) {
            // if there is only one row, you create a new row
            tr = tbody.appendChild('tr');
        } else {
            // otherwise, return the fourth row
            tr = tbody.children[1];
        }
    } else if ((i>=20)) {
        if (tbody.childElementCount == 4) {
            // if there is only one row, you create a new row
            tr = tbody.appendChild('tr');
        } else {
            // otherwise, return the fifth row
            tr = tbody.children[1];
        }
    }
}

function buildCard(flavor){
    // Get the correct tileset
    tiles = tileset(flavor);
    // Place each tile
    for (i=0; i<tiles.length; i++) {
        buildAndPlaceTile(i, tile)
    }
}

cards = ["cult", "murder", "general"]
for(i=0; i<cards.length; i++){
    buildCard(cards[i])
}

//this deosnt work. also, even if it did work, it wouldn't 
//place the "Free" tile in the correct spot