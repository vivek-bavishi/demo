function Spy(target, method) {
    var f = target[method]
  
    var temp = {
      count: 0
    }

    target[method] = function() {
      temp.count++
      return f.bind(arguments)
    }
  
    return temp
  }
  
  module.exports = Spy
