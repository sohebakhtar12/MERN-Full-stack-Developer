if(!Array.prototype.hasOwnProperty("sum")){
    Array.prototype.sum = function(){
        let s=0
        for(let item of this){
            s+=item
        }
        return s
    }
}


const heading = document.getElementById("heading")
let arr=[4,5,8,1,2]

let avg = arr.sum()/arr.length
heading.innerText=`Average Package : ${avg}`

Array.prototype.binarySearch = function(target){
    let left = 0
    let right = this.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(this[mid] == target){
            return mid
        }
        else if(target > this[mid]){
            left=mid+1
        }
        else{
            right = mid-1
        }
    }
    return -1
}

let s = [1,2,3,4,5,6,7,8]
console.log(s.binarySearch(5))