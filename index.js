// code your solution here
function superbowlWin(arr){
    let result = arr.find(arr => arr.result === "W")
    if(result){
        return result.year
    }else{
        return undefined
    }
}

const record = [
    {
        year : "2015",
        result : "W"
    },
    {
        year: "2014", 
        result: "N/A"
    },
    {
        year: "2013",
        result: "L"
    }

]

console.log(superbowlWin(record))