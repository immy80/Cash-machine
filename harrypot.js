// let harry= `Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognising it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The Witch or Wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation.`;


function wordCount(str){
    return str.split(" ").length;
}
    console.log(wordCount (`Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognising it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The Witch or Wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation.`));


function longestWord(string){
    let str= string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function(str){
    if (longest < str.length) {
        longest = str.length;
        word = str;
    
}
});
return word;

}

console.log(longestWord ("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognising it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The Witch or Wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation."));

