// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers) 
{
    return drivers.slice(-2) 
    
}
 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

 function createFareMultiplier(num1){
    return function ( num2){
        return num1*num2
    }
 }
const fareDoubler= createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers =function (drivers, selectFirstTwoDrivers ){
    return selectFirstTwoDrivers(drivers)
}