let theTiles1= ["Charasmatic Leader", "Relinquished Money and Posesssions", "Brainswashing", 
"Compound", "Changed Names", "Matching Clothes And/Or Hair", "Penalty For Leaving", 
"Seperation Of Family Members Within", "Cut Off Ties From Family And Other Non-Members", 
"Doomsday", "Sex Only With Leader", "Free Sex"]

let theTiles2= ["No Sex", "Pedophelia", "Physical Abuse", 
"Public Outreach", "Those Who Leave Are Bad Or Evil", "Books, Tv, Etc About Abuse Of Members", 
"Leader Has Sanskrit Name", "Death", "Multiple Groups In Different Locations",
 "Leader Is Incarnation Of God Or Jesus", "Justification Of Anything Leader Deems Necessary", 
 "Yoga And/Or Vegetarian Diet"]


 let freeTile= ["Free"]


function randomBingoCard(array1, array2){
    let itemOne= array1.shift();
    array1.push(itemOne);
    return array1.concat(array2);
}


//this strategy produces twelve different possible bingo cards. It's fine for now. in the 
//future, how can I make more possible variations?
//I need to build a user interface that looks like the bingo card ashley created. I need to 
//write a function that places each string from the array that randomBingoCard returns 
//into an individual "bingo tile" and returns a completed bingo card. I need to insert a 
//button onto the screen that does that every time it is pressed 
//long term goal: make the bingo card interactive, so that you can "push" on a tile
//and it appears crossed out on the screen. 