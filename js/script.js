//make arrays to hold Generally Fucked up Bingo and Murder Bingo. Make Buttons to choose
//which card you will interact with.(10/9/2020)
//write a function that places each string from the array that randomBingoCard returns 
//into an individual "bingo tile" and returns a completed bingo card. I need to insert a 
//button onto the screen that does that every time it is pressed 
//long term goal: make the bingo card interactive, so that you can "push" on a tile
//and it appears crossed out on the screen. 
//TODO: test bingo card on mikels web server on chrome and safari to make sure all looks
//correct and that the fonts work

let CultTiles= ["Charasmatic Leader", "Relinquished Money and Posesssions", "Brainwashing", 
"Compound", "Changed Names", "Matching Clothes And/Or Hair", "Penalty For Leaving", 
"Separation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
"Doomsday", "Sex Only With Leader", "Free Sex","No Sex", "Pedophelia", "Physical Abuse", 
"Public Outreach", "Those Who Leave Are Bad Or Evil", "Books, Tv, Etc About Abuse Of Members", 
"Leader Has Sanskrit Name", "Death", "Multiple Groups In Different Locations",
 "Leader Is Incarnation Of God Or Jesus", "Justification Of Anything Leader Deems Necessary", 
 "Yoga And/Or Vegetarian Diet"];

 let MurderTiles= ["Tortured Animals", "Pillar Of The Community", "Kept Trophies", "White Male",
  "No Remorse", "Highly Intelligent", "Charming", "Did Badly In School", "Childhood Abuse", 
  "Late Bed Wetter", "Substance Abuse", "Sexual Sadist", "Childhood Head Trauma", 
  "Cooling off period between victims", "extreme self pity", "early psychiatric problems", 
  "escalation", "involved in search party", "domineering mother", "absent father",
   "tried for police force", "taunted police", "friendly with police", "childhood pyromania"];


let FuckedUpTiles= ["complex cover up", "no justice", "fucked by the media", "wrongfully convicted",
  "sex trafficking","people meet on the internet", "drugs / alcohol", "secret language / vocabulary", 
  "extreme beliefs", "manipulation", "missing person(s)", "mass hysteria", "cannibalism",
  "conspiracy", "mcdonald triad", "supernatural phenomena", "dark rituals", "religion / occult",
  "straight con", "creepy uncle", "sudden catastrophic event", "sexual encounter", "dark web", 
  "animals", "institutionalized", "government politics", "mutilation", "armed forces",
  "bloodshed", "victim blaming", "munchausen"];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j]; 
        array[j] = temp;
    }
}

function tileSet(bingoType){ 
    // A function to generate 25 randomized tiles, including a "free" space
    // bingoType is a kind of bingo card, like 'cult'

    // we're converting a string, 'cult', into a variable name, cultTiles
    let oldArray = eval(bingoType + 'Tiles');
    shuffleArray(oldArray);
    newArray=oldArray.slice(0, 24)
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
        console.log("there's no Tr!!");
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
    let bingoTable = document.getElementById("bingo-card") //TODO: don't run it for every tile, only every table
    //TODO: this function currently depends on the bingo table ID being "cult-card". Make the HTML have a button or something so the user can pick which flavor of card 
    if (!bingoTable) {
        // If the program can't find the table, raise an error
        console.log("Error!!!!! where's the table?!")
        return;
    } else {
        let tbody = bingoTable.children[0]; 
        let rowNumber = Math.floor(tileNumber/5)
        console.log('rowNumber is ' + rowNumber);
        console.log(`tileNumber is ${tileNumber}`);

        //the first four times through this tbody.children is empty and that results 
        //in buildAndPlaceTile not being able to find a TR because the first four
        //times this is called tilenumber is not divisible by 5 and rowNumber is 0
        if (((tileNumber)%5 == 0) || (tbody.childElementCount <= rowNumber)) {
            return createTr(tbody);
        } else {
            // rowNumber is the rank the tile should be in (e.g. first row, 2nd row, etc)
            // So if the number of trs is greater than or equal to the current rank, 
            return tbody.children[rowNumber];
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
    console.log("here we go!")
    let title=bingoType + " Bingo";
    let result = title.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    document.getElementsByTagName("h1")[0].textContent=finalResult;
    console.log("did it work??")
    table = document.getElementById("bingo-card");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    // Get the correct tileSet
    theTiles = tileSet(bingoType);
    tiles=theTiles.slice()
    // Place each tile
    tiles.splice(12, 0, "Free");
    for (i=0; i<tiles.length; i++) {
        let currentTile = tiles[i];
        buildAndPlaceTile(currentTile, i, bingoType)
    }
}

