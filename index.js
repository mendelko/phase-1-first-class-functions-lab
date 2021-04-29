const returnFirstTwoDrivers = (function(drivers){
    const firstArray = [drivers[0], drivers[1]];
    return firstArray;
})

const returnLastTwoDrivers = (function(drivers){
    const secondArray = [drivers[2], drivers[3]];
    return secondArray;
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    const fareMultiplier = function(){
        return x * x;
    }
    return fareMultiplier 
}

const fareDoubler = (function(x){
    return x + x;
})

const fareTripler = (function(x){
    return x * 3
})

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers);
}