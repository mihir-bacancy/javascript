    
function countWords(inputWords){
  return inputWords.reduce(function(word, cValue){
    
    if (!word[cValue])
    {
      word[cValue] = 1;
    } 
    else 
    {
      word[cValue] = word[cValue] + 1;
    }
    return word;
  },{});
}
    
    module.exports = countWords
