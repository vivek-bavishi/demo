/* module.exports = function arrayMap(arr, fn, a) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn(a,item, index, arr))
      return acc
    }, [])
  } */

function arrayMap(arr, fn) {
    return arr.reduce(function (acc, item) {
        acc.push(fn(item))
        return acc
    }, [])
}

var nums = [1,2,3,4,5]
    
    // `map` is your exported function
    // var output = map(nums, )
    
    console.log(arrayMap(nums, function double(item) {
        return item * 2
      })) 