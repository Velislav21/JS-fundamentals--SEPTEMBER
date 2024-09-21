function palindromeInteger(arr){

    for (num of arr){
        let isPalindrome = checkIsPalindrome(num)
        console.log(isPalindrome)
    }
    function checkIsPalindrome(num){
        let numAsString = num.toString();
        let reversedNum = '';

        for (let i = numAsString.length - 1; i >= 0; i--){
            let currentDigit = numAsString[i];
            reversedNum += currentDigit;
        }
        let isPalindrome = num == reversedNum;

        return isPalindrome;
    }
    
}
palindromeInteger([123,323,421,121])
//palindromeInteger([32,2,232,1010])