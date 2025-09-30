const numbers = []
let number = 0;
let max_i = 3
let max = 4
let numbercount = 16
let column = 0
let row = 0
let changerow = true
let indexlist = []

//console.log(process.argv[2])

if (process.argv[2] > 2 && process.argv[2] < 50) {
    //console.log('Good argument')
    max = process.argv[2]
    max_i = max - 1
    numbercount = max*max
}
else {
    console.log('Give a number between 3 and 50 as an argument.')
    console.log('This app will create and display an array with numbers ascending, moving like a snake...')
    console.log('The default number is 4.')
}

for (let i = 0; i <= max_i; i++) {
    //console.log(i)
    numbers.push(new Array(max))
}
//console.log('Numbercount: ', numbercount)

for (; number < numbercount;) {
    //console.log("Numbering begins ", number)
    if (number === 0) {
        //console.log("Zero")
        number++
        numbers[row][column] = number
    }
    else {
        if (changerow) {
            for (;changerow;) {
                //console.log('Changing row')
                number++

                if (row < max_i) {
                    row++
                }
                if (row === max_i) {
                    changerow = false
                } 
                if (column > 0) {
                    column--
                    if (!indexlist.includes(row+','+column)) {
                        //console.log('No previous index found')
                    }
                    else {
                        //console.log('Previous index found')
                        column = column + 2
                        row--
                        changerow = false
                    }
                }
                else {
                    changerow = false
                }
                //onsole.log("row: ", row, "column: ", column, "no: ", number)
                numbers[row][column] = number
                indexlist.push(row+','+column)

            }
        }
        else {
            for (;!changerow;) {
                //console.log('Changing column')
                number++
                if (column === max_i && row === 0) {
                    row++
                    changerow = true
                }
                else {
                    if (column < max_i) {
                        column++
                    }
                    if (row > 0) {
                        row--
                        if (!indexlist.includes(row+','+column)) {
                            //console.log('Index not found')
                        }
                        else {
                            for (;indexlist.includes(row+','+column);) {
                                //console.log('Index found')
                                row++
                                changerow = true
                            }
                        }
                    }
                    else {
                        changerow = true
                    }
                }
                //console.log("row: ", row, "column: ", column, "no: ", number)
                numbers[row][column] = number
                indexlist.push(row+','+column)
            }
        }
    }
    //console.log(indexlist);
}

console.log(numbers);