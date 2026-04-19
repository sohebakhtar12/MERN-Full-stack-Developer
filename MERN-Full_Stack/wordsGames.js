let arr = ["all", "letter", "rose", "elephaent", "titel"]


function WordsGame(MyArr) {
    for (let i = 0; i < MyArr.length - 1; i++) {
        let curr = MyArr[i];
        let next = MyArr[i + 1];

        if (curr[curr.length - 1] != next[0]) {
            return false
        }
    }
    return true
}
console.log(WordsGame(arr))