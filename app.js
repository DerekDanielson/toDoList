const words = [
    'immunelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopsuedohypoparathyroidism',
    'unimaginatively'
];
//Creates array of all the words with 20 or more letters
const longWords = words.filter(function(word){
   return word.length >= 20;
});
//Creates array of all the words with 20 or less letters
const shortWords = words.filter(function(word){
    return word.length <= 20;
});
//Returns words starting with c
const testLetter = words.filter(function(word){
    return word[0] === 'c';
});

//Broken
/*const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
});*/

const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char){
   return 'aeiou'.indexOf(char) !== -1;
};

//map and filter together - Returns checked items from list
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});
//will list checked items form list and display the actual text
const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});

//Combined
function extractCompletedTodos() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(allCheckboxes).filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}


function myFilter(arr, callback){
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

const shorts = myFilter(words, function(word){
    return word.length <= 10;
});

const everyOther = myFilter(words,function(word, i){
    return i % 2 === 0;
});