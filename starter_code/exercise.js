var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return "Hello!"

};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var arrNum = [1,2,3,4,5];
    return arrNum
   
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    obj = {name: "YuQiu", age: 22}
    return obj
    
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var arrObj = [{},{},{}]
    return arrObj
    
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject.name = "peter";
    return someObject
    
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    var arrElement = someArray[2];
    return arrElement
    
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var concatStr = [];
    concatStr.push(string1)
    concatStr.push(string2)
    concatStr.push(string3)
    return concatStr
    
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    var arrFiltered = someNumbers.filter(item => item > 6);
    return arrFiltered
   
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------
    var arrName = [];
    people.forEach(function(item){
        arrName.push(item.name)
    })
    return arrName
    
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------
    var totalSalary = people.reduce(function(accumulator,item){
        accumulator = accumulator + item.salary
        return accumulator
    },0)
    return totalSalary
    
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    var sortAscending = someNumbers.sort(function(a,b){
        return a-b
    })
    return sortAscending
    
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    console.log("I am executing the callback!")
    return callback()
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    var arrPeopleJobs = [];
    
    payroll.forEach(function(item){
        var objPeopleJobs = [];
        objPeopleJobs.push(item[1])
        objPeopleJobs.push(item[2])
 
        arrPeopleJobs.push(objPeopleJobs)
    })
    return arrPeopleJobs
    
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var totalPayroll = payroll.reduce(function(accumulator,item){
           accumulator += Number(item[3])
           return accumulator
    },0)
    return totalPayroll
    
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var aboveTarget = payroll.filter(item => Number(item[3]) > target); 

    var lengthTarget = aboveTarget.length
    return lengthTarget

    
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    var numZip = 0;
    var ty = typeof 
    payroll.forEach(function(item){
        var str = item[4]
        if (str.includes(num)){
            numZip = numZip+1;
        }
    })
    return numZip
    
};


module.exports = exercise;
