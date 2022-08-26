//read json file as an object, retreve two atributes. create a function that you can pass in two atribute though, which will return the calculated percentage used.
//stat light should be another funtion based off the one above

const fs = require('fs');
const filePath = 'data/limits.json';


const data = JSON.parse(fs.readFileSync(filePath));
max = data.result[0].max;
remaining = data.result[0].remaining;

var calculatedPercent = remaining / max * 100
var lightColor = ""

if (calculatedPercent < 50) {
        lightColor = ":large-green_circle:"
}
else if(calculatedPercent < 75){

}







// const fs = require('fs');


// const path = '/Users/mfish/dev/limitsManager/data/limits.json'




// const limitsData = {
//     hasRecord: false,
//     hasName: false,
//     hasMax: false,
//     hasRemaining: false,
//     get fullRecord() {
//         return `${limitsData.hasRecord} ${limitsData.hasName} ${limitsData.hasMax} ${limitsData.hasRemaining}`;
//     },
//     set fullRecord(value) {
//         const limitsSetterRecord = value;
//         this.hasRecord = limitsSetterRecord
//         this.hasName = limitsSetterRecord
//     },
// }

// if (fs.existsSync(path)) {
//     pathExists = true
// }
// else{
//     console.log("path does not exist")
// };

// fs.readFile(path, 'utf8', (err, jsonString) => {
//     if (err){
//         console.log("could not read file")
//     }
//     limitsDataFile = JSON.parse(jsonString)
//     console.log(limitsDataFile)
//     if(limitsDataFile.result[0].name){
//     }
//     });


// //get and set