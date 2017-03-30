// business logic
// var
  // if number is between 1 and 3999 proceed/pass as input, else dont.
var goodNum = function(input) {
  if ((input >= 1) && (input <= 3999)) {
    return isThousMore(input);
  } else {
    alert("enter whole number between 1 and 3999");
  }
}

  // take input and see if its one of the base roman values else proceed
var isBaseRoman = function(input) {
  if (input === 1) {
  input = "I";
  // alert(input);
  return input;
  }
  if (input === 5) {
  input = "V";
  // alert(input);
  return input;
  }
  if (input === 10) {
  input = "X";
  // alert(input);
  return input;
  }
  if (input === 50) {
  input = "L";
  // alert(input);
  return input;
  }
  if (input === 100) {
  input = "C";
  // alert(input);
  return input;
  }
  if (input === 500) {
  input = "D";
  // alert(input);
  return input;
  }
  if (input === 1000) {
  input = "M";
  // alert(input);
  return input;
  }
}

var isThousMore = function(input) {
  if (input >= 1000) {
    debugger;
  var Ms = ((input - (input % 1000)) / 1000);
  var remainderM = input % 1000;
  input = Ms
    if (input === 1) {
      input = "M"
    } else if (input === 2){
        input = "MM"
    } else if (input ===3){
        input = "MMM"
    }
  }
  console.log(remainderM)
    return isOneHundMore(input, remainderM);
}

// Pass the modulo into the next function

var isOneHundMore = function(input, remainderC) {
  if (remainderC >= 100 && remainderC < 1000) {
  var Cs = ((remainderC - (remainderC % 100)) / 100);
  var remainderC = remainderC % 100;

  if (Cs === 1) {
    input = input + "C"
  } else if (Cs === 2) {
    input = input + "CC"
  } else if (Cs === 3) {
    input = input + "CCC"
  } else if (Cs === 4) {
    input = input + "CD"
  } else if (Cs === 5) {
    input = input + "D"
  } else if (Cs === 6) {
    input = input + "DC"
  } else if (Cs === 7) {
    input = input + "DCC"
  } else if (Cs === 8) {
    input = input + "DCCC"
  } else if (Cs === 9) {
    input = input + "CM"
  }

  // isTenMore(input);
  return input;
  }
}
var isTenMore = function(input) {
  if (input >= 10 && input < 100) {
  var Xs = ((input - (input % 10)) / 10)
  input = Xs
  if (input === 1) {
    input = "X"
  } else if (input === 2) {
    input = "XX"
  } else if (input === 3) {
    input = "XXX"
  } else if (input === 4) {
    input = "XL"
  } else if (input === 5) {
    input = "L"
  } else if (input === 6) {
    input = "LX"
  } else if (input === 7) {
    input = "LXX"
  } else if (input === 8) {
    input = "LXXX"
  } else if (input === 9) {
    input = "XL"
  }
  alert(input);
  // isOneHundMore(input);
  return input + isOneHundMore(input);
  }
}
var isOneMore = function(input) {
  if (input >= 1 && input < 10) {
  var Is = ((input - (input % 1)) / 1)
  input = Is
  if (input === 1) {
    input = "I"
  } else if (input === 2) {
    input = "II"
  } else if (input === 3) {
    input = "III"
  } else if (input === 4) {
    input = "IV"
  } else if (input === 5) {
    input = "V"
  } else if (input === 6) {
    input = "VI"
  } else if (input === 7) {
    input = "VII"
  } else if (input === 8) {
    input = "VIII"
  } else if (input === 9) {
    input = "IX"
  }
  alert(input);
  isTenMore(input);
  return input
  }
}


// ui logic


$(document).ready(function(){

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());

    var result = goodNum(userInput);
    $("#romResult").append(result);
    $("form").hide();
    $(".result").show();
  });

  $("#reload").click(function(){
    location.reload();
  });


});
