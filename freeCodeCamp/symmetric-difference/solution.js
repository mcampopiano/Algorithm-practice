function sym() {
    var args = Array.prototype.slice.call(arguments);

    const helper = (arr1, arr2) => {
        let newArr = []
        for (const num of arr1) {
            if (arr2.find(number => number === num) === undefined && newArr.find(number => number === num) === undefined) {
                newArr.push(num)
            }
        }
        for (const num of arr2) {
            if (arr1.find(number => number === num) === undefined && newArr.find(number => number === num) === undefined) {
                newArr.push(num)
            }
        }
        return newArr
    }
    const reducer = (accumulator, currentValue) => helper(accumulator, currentValue)
    console.log(args.reduce(reducer))
    return args.reduce(reducer)

}