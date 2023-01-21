function deleteValues(array, pred) {
    for (var i = 0; i < array.length; i++) {
        if (pred(array[i])) {
            array.splice(i, 1);
            i-=i;
        }
    }
    return array;
}



console.log(deleteValues([1,4 ,"£",33,"*","D",0,"s", 3,"$","sde","r",22], isNaN));