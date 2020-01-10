function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function (allNames, name) { 
        if (name in allNames) {
          allNames[name]++
        }
        else {
          allNames[name] = 1
        }
        return allNames
      }, {}) ;
  }
  
  module.exports = countWords


