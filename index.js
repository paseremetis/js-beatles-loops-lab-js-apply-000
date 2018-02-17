//The function establishes the arrays, musicians and instruments, as the parameters.
function theBeatlesPlay(musicians, instruments){
  var blankArray = []
//when the counter variable i is between 0 and the length of the musicians array (in this case 4), the loop will insert the elements from [musicians] and [instruments] into the variable: blank array. 
    for (let i = 0; i < musicians.length; i++)
       blankArray [i] = (`${musicians[i]} plays ${instruments[i]}`)
//Once the loop is run, the program will return the new array. 
  return blankArray
   }
//The function establishes an array (any array) as the parameter. 
function johnLennonFacts(array){
//When the counter variable i is between 0 and the array length, the program will loop through each index of the array, and insert "!!!" at the end of each element of the array.
     let i = 0;
     while (i < array.length){
       array[i] = (array[i]+ `!!!`);
       i++;
    }
//Once the loop is run, the program will return the new array. 
    return array
}
function iLoveTheBeatles(aNumber){
  var loveBeatlesArray = [];
  let i = aNumber;
  do {
    loveBeatlesArray.push(`I love the Beatles!`);
    i++;
  } while (i < 15);
  return loveBeatlesArray
}
