// code your solution here

//1. 
function saturdayFun(arg1 = 'roller-skate') {
    return `This Saturday, I want to ${arg1}!`
}



//2.Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." 
//Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Run npm test to verify you've gotten this set of tests passing before continuing with the lesson.
function mondayWork(toDo = 'go to the office'){
    return `This Monday, I will ${toDo}.`//Backtick used instead of quotation 
}



//3. 
function wrapAdjective(arg1 = '*') {
    return function(param1 = 'special') {
        return `You are ${arg1}${param1}${arg1}!`
    } 

}