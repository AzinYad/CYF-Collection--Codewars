function isAnagram(word1, word2) {

    word1 = word1.toLowerCase().split('').sort().join('');
    console.log(word1);
    word2 = word2.toLowerCase().split('').sort().join('');
    console.log(word2);
    return (word1 === word2) ? true : false;
}

console.log(isAnagram("lIsteN", "siLEnt"));