// Question 1
const isRealPalindrome = (word) => {
  let newWord = word.toLowerCase().replace(/\W/g, '')
  let leftPoint = 0
  let rightPoint = newWord.length-1
  
  while(leftPoint<rightPoint){
    if(newWord[leftPoint]!== newWord[rightPoint]){return false}
    leftPoint++
    rightPoint--
  }
  return true
  };
  
  // Question 2
  const runningTotal = (arrOfNum) => {
    let newArr = [];
    let total = 0;
    for(let i = 0; i<arrOfNum.length; i++){
      total+=arrOfNum[i];
      newArr.push(total)
    }
    return newArr
  
  };
  
  // Question 3
  const swap = (word) => {
    let newWord = '';
    word = word.split(' ')
    for(let i = 0;i < word.length; i++){
      let wordsReverse = word[i].split('').reverse()
      newWord+= wordsReverse.join('')+' '
      
  
    }
    return newWord.slice(0, -1)
  };
  
  // Question 4
  const wordSizes = (word) => {
    let wordObj = {}
    word = word.split(' ')
    for (let i = 0; i < word.length; i++){
      if(word[i].length <= 0){return {}}
      else if(wordObj[word[i].length]){
        wordObj[word[i].length]++
      }else(
        wordObj[word[i].length]=1
      )
    }
  
    return wordObj
    
  };
  
  // Question 5
  const union = (arr1,arr2) => {
    let array = arr1.concat(arr2);
    let map = new Map();
    let results = [];
    for(let i = 0; i < array.length; i++){
     if(!map.has(`${array[i]}`)){
      map.set(`${array[i]}`,0)
      results.push(array[i])
    }
   }
    return results
  };
  
  // Question 6
  const firstRecurring = (word) => {
    let map = new Map();
  
    for(let i = 0; i < word.length; i++){
     if(map.has(`${word[i]}`)){
      return map.get(`${word[i]}`) 
    }else{
      map.set(`${word[i]}`,`${word[i]}`)
    }
   }
    return ''
  };
  
  // Question 7
  const showMultiplicativeAverage = (arrOfNum) => {
    return (arrOfNum.reduce((a,b)=>a*b)/arrOfNum.length).toFixed(3)
  };
  
  // Quetsion 8
  const multiplyList = (arr1, arr2) => {
    return arr1.map((element,i) => element*arr2[i])
  };
  
  // Question 9
  const sequence = (num) => {
    let arrOfNum = [];
    for (let i = 1; i<=num; i++){
      arrOfNum.push(i)
    }
  return arrOfNum
  };
  
  // The below code connects this JS file to our test file
  module.exports = {
    isRealPalindrome,
    runningTotal,
    swap,
    wordSizes,
    union,
    firstRecurring,
    showMultiplicativeAverage,
    multiplyList,
    sequence,
  };