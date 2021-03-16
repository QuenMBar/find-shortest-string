const { performance } = require("perf_hooks");

// 0.00037653399826958773
// function findShortestString(arr) {
//     let shortIndex = 0;
//     arr.forEach((elem, ind, array) => {
//         // console.log(`${elem}, ${ind}, ${array}, ${elem.length < arr[shortIndex].length}`);
//         if (elem.length < arr[shortIndex].length) {
//             shortIndex = ind;
//         }
//     });
//     return arr[shortIndex];
// }

// 0.0003052189988270402
function findShortestString(arr) {
    return arr.reduce((a, b) => (a.length <= b.length ? a : b));
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 'a'");
    console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

    console.log("");

    console.log("Expecting: 'hi'");
    console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

    console.log("");

    console.log("Expecting: 'lily'");
    console.log("=>", findShortestString(["flower", "juniper", "lily", "dadelion"]));

    // BENCHMARK HERE
    let arrayLen1 = 10;
    let arrayLen2 = 100;

    let averageTries = 100000;

    let timesArr = [];

    for (let i = 0; i < averageTries; i++) {
        let array1 = [];
        let array2 = [];
        for (let j = 0; j < arrayLen1; j++) {
            array1.push("a".repeat(Math.floor(Math.random() * (arrayLen1 * 3)) + 1));
        }
        for (let j = 0; j < arrayLen2; j++) {
            array2.push("a".repeat(Math.floor(Math.random() * (arrayLen2 * 2)) + 1));
        }
        let t1 = performance.now();

        let dummyVar1 = findShortestString(array1);
        let dummyVar2 = findShortestString(array2);

        let t2 = performance.now();
        timesArr[i] = t2 - t1;
    }
    let allTimes = timesArr.reduce((a, b) => a + b);
    console.log(allTimes / averageTries);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
