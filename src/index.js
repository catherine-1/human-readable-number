function toReadable(number) {
    let result = '';

    const numberWord = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }
    
    if (number < 21) {
        return numberWord[number]
    }

    else {
        const digit_X00 = Math.floor(number / 100)
        const digit_0X0 = Math.floor((number - digit_X00 * 100) / 10)
        const digit_00X = number - digit_X00 * 100 - digit_0X0 * 10

        if (digit_X00 > 0) {
            result = `${numberWord[digit_X00]} hundred`
        }

        if (digit_0X0 > 1) {
            result = `${result} ${numberWord[digit_0X0 * 10]}`
        } else if (digit_0X0 === 1) {
            result = `${result} ${numberWord[number - digit_X00 * 100]}`
        }

        if (digit_00X > 0 && digit_0X0 === 0) {
            result = `${result} ${numberWord[digit_00X]}`
        }
        else if (digit_00X > 0 && digit_0X0 === 1) {
        }
        else if (digit_00X > 0 && digit_0X0 > 1) {
            result = `${result} ${numberWord[digit_00X]}`
        }
        else if (digit_00X === 0) {
            result = `${result}`
        }

        return result.trim()
    }

}

module.exports = toReadable;
