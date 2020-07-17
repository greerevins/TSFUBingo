//I need to build a user interface that looks like the bingo card ashley created. I need to 
//write a function that places each string from the array that randomBingoCard returns 
//into an individual "bingo tile" and returns a completed bingo card. I need to insert a 
//button onto the screen that does that every time it is pressed 
//long term goal: make the bingo card interactive, so that you can "push" on a tile
//and it appears crossed out on the screen. 

let cultTiles= ["Charasmatic Leader", "Relinquished Money and Posesssions", "Brainwashing", 
"Compound", "Changed Names", "Matching Clothes And/Or Hair", "Penalty For Leaving", 
"Separation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
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

function tileset(bingoType){ 
    // A function to generate 24 randomized tiles, including a "free" space
    // todo: prevent duplicate tiles
    // bingoType = 'cult'

    // we're converting a string, 'cult', into a variable name, cultTiles
    let anArray = eval(bingoType + 'Tiles');

    let newArray=[];
    let text="";
    for(i=0; i<anArray.length+1; i++){
        if (i==12) {
            text = "free";
            newArray.push(text);
        } else{
            let tile = cultTiles[getRandom(0, cultTiles.length)]
            newArray.push(tile);
        }
    }
    return newArray;
} 

function getFirstElement(anArray){
    //this function is the leftover bits
    //of a function that enabled me to test stuffing
    //a random element of an array into a designated td. 
    newArray=(newBingoCard(anArray));
    return newArray.shift(0);
}

function buildAndPlaceTile(tileText, tileNumber, bingoType){
    // shove the td into the appropriate tr
    let tr = findOrCreateTr(tileNumber, bingoType);
    if (!tr) {
        console.log("an error occurred!!");
        return
    } else {
        let td= document.createElement("td");
        tr.appendChild(td);
        td.innerHTML= tileText;
        // then make the td have the text
        console.log(tileText);
    }
}

function findOrCreateTr(tileNumber, bingoType) {
    // "bingoType" is the type of card, e.g. "cult" or "murder"
    let bingoTable = document.getElementById(`${bingoType}-card`) //TODO: don't run it for every tile, only every table
    //TODO: this function currently depends on the bingo table ID being "cult-card". Make the HTML have a button or something so the user can pick which flavor of card 
    if (!bingoTable) {
        // If the program can't find the table, raise an error
        console.log("Error!!!!! where's the table?!")
        return;
    } else {
        let tbody = bingoTable.children[0]; // tbody is always the first element of a table
        let rowNumber = Math.floor(tileNumber/5)
        console.log('rowNumber is ' + rowNumber);
        console.log(`tileNumber is ${tileNumber}`);

        if ((tileNumber%5 == 0) || (tbody.childElementCount < rowNumber)) {
            return createTr(tbody);
        } else {
            // rowNumber is the rank the tile should be in (e.g. first row, 2nd row, etc)
            // So if the number of trs is greater than or equal to the current rank, 
            return tbody.children[rowNumber-1];
        }
    }
}

function returnLastTr(tbody) {
  let trs = tbody.children;
  let trsCount = trs.length;
  return trs[trsCount-1]
}

function createTr(tbody) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    return tr;
}

function buildCard(bingoType){
    // Get the correct tileset
    tiles = tileset(bingoType);
    // Place each tile
    for (i=0; i<tiles.length; i++) {
        let currentTile = tiles[i];
        buildAndPlaceTile(currentTile, i, bingoType)
    }
}

cards = ["cult", "murder", "general"]
for(i=0; i<cards.length; i++){
    buildCard(cards[i])
}
