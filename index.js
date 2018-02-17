function theBeatlesPlay(musicians, instruments){
  var blankArray = []
    for (let i = 0; i < musicians.length; i++)
       blankArray [i] = (`${musicians[i]} plays ${instruments[i]}`)
  return blankArray
   }
function johnLennonFacts(array){
     let i = 0;
     while (i < array.length){
       array[i] = (array[i]+ `!!!`);
       i++;
    }
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
