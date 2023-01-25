/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let result = 0;
    
    const romanNumbers = [
        ['I',1], 
        ['V',5], 
        ['X',10], 
        ['L',50], 
        ['C',100], 
        ['D',500], 
        ['M',1000],
        ['IV',4],
        ['IX',9],
        ['XL',40],
        ['XC',90],
        ['CD',400],
        ['CM',900]
    ];

    const findElement = (element) => {
        for (let i = 0; i < romanNumbers.length; i++) {
            const rNumber = romanNumbers[i];
            if (rNumber[0] === element) {
                return rNumber[1];
            }   
        }
        return 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const nextElement = s[i+1]

        if (findElement(element + nextElement) != 0) {
            result = result + findElement(element + nextElement);
            i = i + 1;
        }
        else result = result + findElement(element);
    }

    return result;
};


// test cases

console.log(romanToInt('III')); // 3

console.log(romanToInt('LVIII')); // 58

console.log(romanToInt('MCMXCIV')); //1994

console.log(romanToInt('DCCLXXXIX')); //789