const fs = require("fs")

const arrObj = [
    {
        s: "hej",
        l : "hej",
        a: "hej",
        b: "h j"
    },
    {
        s: "hej2",
        l : "hej",
        a: "hej",
        b: "h j"
    }
]
function getToString()
{
    let tempArr =[]
    for(let i =0; i <arrObj.length; i++) {
        tempArr.push(Object.values(arrObj[i]).toString())
    
    }
    return tempArr.toString().replace(/,/g,"\n")
}
    
    function getWhat(texten) {
    const file = "starCraft.txt"
    fs.writeFileSync(file, texten)
}
getWhat( getToString(arrObj))