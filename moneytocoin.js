

// money change to coins


function convert_to_coins(amount) {
  var denominations = [10, 5, 2, 1];
  var curr_denom_index = 0;
  while (amount > 0) {
    while (amount < denominations[curr_denom_index]) {
      curr_denom_index++;
    }
    amount = amount - denominations[curr_denom_index];
    console.log(denominations[curr_denom_index] );
  }
}


convert_to_coins(18)  // 10 5 2 1

convert_to_coins(11)  // 10  1

convert_to_coins(14)  // 10 2 2
