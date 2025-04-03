const reverseString = function(string) {
    const arrayString = string.split("");
    for(let i=0;i<(arrayString.length-1)/2;i++)
    {
        let aux=arrayString[i];
        arrayString[i]=arrayString[arrayString.length-i-1];
        arrayString[arrayString.length-i-1]=aux;
    }
    let reversedString=arrayString.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
