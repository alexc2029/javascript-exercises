const sumAll = function(intervalStart, intervalEnd) {
    let sum=0;
    if(intervalStart>intervalEnd)
    {
        let aux=intervalStart;
        intervalStart=intervalEnd;
        intervalEnd=aux;
    }
    if(intervalStart < 0 || intervalEnd < 0)
        return "ERROR";
    if(!(Number.isInteger(intervalStart)) || !(Number.isInteger(intervalEnd)))
        return "ERROR";
    for(let i=intervalStart;i<=intervalEnd;i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
