const fs = require('fs');
const filePath = 'data/limits.json';

//given the json object from the parsed file
test('There is a json object from the parsed file', () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    expect(data).toEqual(expect.anything());
});
//and that for each record i map the record and atributes into the destination ui block format
test.only('Each record is mapped into the ui block destination', () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    for(let i = 0; i < -1; i++){
        max = data.result[i].max
        remaining = data.result[i].remaining;
    calculatedPercent = (max - remaining / max)
    console.log(i)
    expect(calculatedPercent).toEqual(String)
    }
});
//And that i inlude the calculated icon for the light
test('Each percentage range is assigned a light', () => {
    var icon = ""
    for(let i = 0; i < -1; i++){
        max = data.result[i].max
        remaining = data.result[i].remaining;
    calculatedPercent = (max - remaining / max)
    if(calculatedPercent >= 75){
        icon = ":red_circle:"
        expect(icon).toEqual(":red_circle:")
    }
    else if(calculatedPercent <= 50){
        icon = ":large_green_circle:"
        expect(icon).toEqual(":large_green_circle:")
    }
    else{
        icon = ":large_yellow_circle:"
        expect(icon).toEqual(":large_yellow_circle:")
    };
}
});
//And that I inlude the calculated field(percentUsed)
//Then it should have a valid ui block record matching each record of the file