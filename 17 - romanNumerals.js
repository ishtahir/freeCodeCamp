function convertToRoman(num) {
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let romanNumeral = '';

    for (let i = 0; i < decimals.length; i++) {
        while (decimals[i] <= num) {
            romanNumeral += romans[i];
            num -= decimals[i];
        }
    }

    return romanNumeral;
}

convertToRoman(89);
convertToRoman(5);
convertToRoman(101);
