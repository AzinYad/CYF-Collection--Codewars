// Gordon Ramsay shouts.He shouts and swears.There may be something wrong with him.

//     Anyway, you will be given a string of four words.Your job is to turn them in to Gordon language.

//         Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.


function gordon(words) {
    const gordonWords = words.toUpperCase().split(" ");
    for (let i = 0; i < gordonWords.length; i++) {
        gordonWords[i] = gordonWords[i].replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!";
    }
    return gordonWords.join(" ");
}
console.log(gordon("What feck damn cake"));

// best Practice
// function gordon(ramsay) {
//     return ramsay
//         .toUpperCase()
//         .replace(/\w+/g, '$&!!!!')
//         .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
// }