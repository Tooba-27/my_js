//switch is used instead of if else . 
// structure 
// switch uses a === comparison.an expression is given , if the case matches exatly with that expression then the code in that case is executed..if we have to heck between rangees then we should give condition in cases and true as an expression
//The switch expression is evaluated once.
//the value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, no code is executed.
// break switches out of the code block..if their is a match in the case then ony that code of block is executed ..othewise it will execute the rest next pesent cases as well
//default case is exeuted when their is no match to the case
const score = 70
let grade
switch(true){
 case score>=90:
    grade="your grade is A+"
    break;
 case score>=80:
    grade="your grade is A"
    break;
    case score>=70:
    grade="your grade is B"
    break;
    case score>=60:
    grade="your grade is C"
    break;
    case score>=50:
    grade="your grade is D"
    break;
     case score<50:
    grade="your grade is F"
    break;

}
console.log(grade)
// falsey val ... false, 0, -0, 0n, "", null, undefined, NaN
//Nullish Coalescing Operator
//The nullish coalescing operator (??) returns the right side value only if the left side is: null or undefined Otherwise, it returns the left side.
//The nullish coalescing operator (??) is important because it helps you handle missing values safely without accidentally changing valid data.
