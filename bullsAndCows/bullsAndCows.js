var getHint = function(secret, guess) {
 var bulls = {}, cowsSecret = {}, cowsGuess = {}, current;

 for (var i = 0; i < secret.length; i++) {
     if (secret[i] === guess[i]) {
         bulls[i] = i;
     }
 }

 for (i = 0; i < secret.length; i++) {
    current = secret[i];
    for (var j = 0; j < secret.length; j++) {
        if (current === guess[j] && (!(i in bulls) && !(j in bulls))) {
            if (!(i in cowsSecret) && !(j in cowsGuess)) {
                cowsSecret[i] = j;
                cowsGuess[j] = i;
            }
        }
    }
 }

 return '' + Object.keys(bulls).length + 'A' + Object.keys(cowsSecret).length + 'B';
};

/*

Recursive attempt >>> Timeout

var getHint = function(secret, guess) {
 var cows, bulls, temp;

 temp = findBulls(secret.split(''), guess.split(''));
 bulls = temp[0];
 cows = findCows(temp[1], temp[2]);

 return '' + bulls + 'A' + cows + 'B';
};

function findCows(arr1, arr2) {

    var count = 0, cow, current = arr1[0];
    while(current !== undefined) {
        if (countCows(current, arr2) > 0) {
            cow = arr1[0];
            arr1 = removeChar(cow, arr1)
            arr2 = removeChar(cow, arr2)
            current = arr1[0];
            count++;
        }
        arr1 = arr1.slice(1);
        current = arr1[0];
    }

    return count;
}

function countCows (c, arr) {
    if (arr.length === 0) return 0;
    if (arr[0] === c) {
        return 1;
    } else {
        return countCows(c, arr.slice(1));
    }
}

function findBulls(arr1, arr2) {
    function countBulls(a1, a2) {
        if(a1.length === 0) return 0;
        if(a1[0] === a2[0]) {
            arr1 = removeChar(a1[0], arr1);
            arr2 = removeChar(a1[0], arr2);
            return 1 + countBulls(a1.slice(1), a2.slice(1));
        } else {
            return countBulls(a1.slice(1), a2.slice(1));
        }
    }
    return [countBulls(arr1, arr2), arr1, arr2];
}

function removeChar (c, arr) {

    if (arr.length === 0) return [];
    if (c === arr[0]) {
        return arr.slice(1);
    } else {
        return [arr[0]].concat(removeChar(c, arr.slice(1)));
    }


}
*/
