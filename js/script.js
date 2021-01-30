//TODO: test bingo card on mikels web server on chrome and safari to make sure all looks
//correct and that the fonts work
//put the remaining bingo items from ashley into arrays

let CultTiles= ["sex with leader for spiritual growth","Designated hierarchy","Leader is all knowing",
    "Leader dictates members romantic relationships","Members can't have kids","Wannabe rock star",
    "Cult ruined a popular branded object (ex: Nikes or Koolaid)","Vulnerable groups or people",
    "Special title for leader","Copied other cult leaders","Cherry picked","Busy bees","Absolute commitment required",
    "Sleep deprivation","Dehumanizing punishments","Medicine not allowed","Jesus is an alien","Group punishments",
    "Mass graves", "Charismatic Leader", "Relinquished Money and Posesssions", "Brainwashing", 
    "Compound", "Changed Names", "Matching Clothes And / Or Hair", "Penalty For Leaving", 
    "Separation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
    "Doomsday", "Sex Only With Leader", "Free Sex","No Sex", "Pedophilia", "Physical Abuse", 
    "Public Outreach", "Those Who Leave Are Bad Or Evil", "Books, Tv, Etc About Abuse Of Members", 
    "Leader Has Sanskrit Name", "Death", "Multiple Groups In Different Locations",
    "Leader Is Incarnation Of God Or Jesus", "Justification Of Anything Leader Deems Necessary", 
    "Yoga And / Or Vegetarian Diet"];

let MurderTiles= ["Tortured Animals", "Pillar Of The Community", "Kept Trophies", "White Male",
    "No Remorse", "Highly Intelligent", "Charming", "Did Badly In School", "Childhood Abuse", 
    "Late Bed Wetter", "Substance Abuse", "Sexual Sadist", "Childhood Head Trauma", 
    "Cooling off period between victims", "extreme self pity", "early psychiatric problems", 
    "escalation", "involved in search party", "domineering mother", "absent father",
    "tried for police force", "taunted police", "friendly with police", "childhood pyromania", "Accomplice",
    "Drove a van","Knew the victim(s) personally","Worked / lived down street and was never questioned",
    "Unrequited love","Described as \"shy / introverted / gentle\"","Attempted insanity plea",
    "They \"just wanted to see what it's like\"","Voluntary polygraph","Represented self in court","Alliance",];

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
    newArray = oldArray.slice(0, 24)
    return newArray;
} 

function buildAndPlaceTile(tileText, tileNumber, bingoType){
    // shove the td into the appropriate tr
    let tr = findOrCreateTr(tileNumber, bingoType);
    if (!tr) {
        console.log("there's no Tr!!");
        return
    } else {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = tileText;
        // then make the td have the text
    }
}

function getCardSlot() {
    return document.getElementById("bingo-card");
}

function findOrCreateTr(tileNumber, bingoType) {
    // "bingoType" is the type of card, e.g. "cult" or "murder"
    let bingoTable = getCardSlot(); //TODO: don't run it for every tile, only every table
    if (!bingoTable) {
        // If the program can't find the table, raise an error
        console.log("Error!!!!! where's the table?!")
        return;
    } else {
        let tbody = bingoTable.children[0]; 
        let rowNumber = Math.floor(tileNumber/5);
        //the first four times through this tbody.children is empty and that results 
        //in buildAndPlaceTile not being able to find a TR because the first four
        //times this is called tilenumber is not divisible by 5 and rowNumber is 0
        if ((tileNumber % 5 == 0) || (tbody.childElementCount <= rowNumber)) {
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
    return trs[trs.length - 1];
}

function createTr(tbody) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    return tr;
}

function bingoCardTitle(bingoType) {
    let rawTitle = bingoType + " Bingo";
    let spacedTitle = rawTitle.replace(/([A-Z])/g, " $1");
    let cardTitle = spacedTitle.charAt(0).toUpperCase() + spacedTitle.slice(1);
}

function buildCard(bingoType){
    document.getElementsByTagName("h1")[0].textContent = bingoCardTitle(bingoType);
    table = getCardSlot();
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    // Get the correct tileSet
    tiles = tileSet(bingoType).slice(); // don't use destructive functions
    // Place each tile
    tiles.splice(12, 0, "Free");
    for (i=0; i<tiles.length; i++) {
        let currentTile = tiles[i];
        buildAndPlaceTile(currentTile, i, bingoType)
    }
}