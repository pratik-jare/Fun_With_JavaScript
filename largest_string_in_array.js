
/*****
find Largest String in array 

*********/

function max_str(arr) {
  return arr.reduce(function(prev, curr) {
    if (curr.length > prev.length) {
      return curr;
    } else {
      return prev;
    }
  }, "");
}


max_str(['new', 'aaaa', 'a', 'asaa', 'qadffff'])
// "qadffff"



