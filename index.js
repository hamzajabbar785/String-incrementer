// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = (str) => {
  let index = 0;
  let letters = ""
  let numbers = ""

  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      index = i;
      break;
    }
  }

  if(index === 0){
    numbers = str.slice()
  }else{
    letters = str.slice(0, index + 1); 
    numbers = str.slice(index + 1);
  }

   if(!numbers){
        return letters + "1"
    }else{
        let incrementedNumbers = (Number(numbers) + 1).toString();
        let formattedNumbers = incrementedNumbers.padStart(numbers.length, "0");
        return letters.concat(formattedNumbers)
    }
};

incrementString("foobar23");

//Solution 2

const incrementString = (str) => {
  let letters = str.replace(/[0-9]+$/, "");
  let numbers = str.match(/[0-9]+$/);

  if (!numbers) {
    return letters + "1";
  } else {
    let incrementedNumbers = (Number(numbers) + 1).toString();
    let formattedNumbers = incrementedNumbers.padStart(numbers.length, "0");
    return letters.concat(formattedNumbers)
  }
};

incrementString("fo99obar0099");
incrementString("1");

