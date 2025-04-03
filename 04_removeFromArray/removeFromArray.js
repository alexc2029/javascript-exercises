const removeFromArray = function(array, ...values) {
    for(let i=0;i<array.length;i++)
    {
        for(const val of values)
            if(array[i]==val && typeof array[i] == typeof val)
            {
                array.splice(i,1);
                i--;
            }
                
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
