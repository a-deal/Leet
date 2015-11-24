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
