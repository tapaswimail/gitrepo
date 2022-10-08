// program to check if the string is palindrome or not

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


// take input
rl.question('Input string to check palindrome---', function (input) { 
     // call the function 
    const value = checkPalindrome(input);
    console.log(value);
    rl.close();
  });

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});


