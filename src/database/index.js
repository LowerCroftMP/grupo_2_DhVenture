const fs = require('fs')
const path = require('path')
/*
const readData = (filenameJSON = 'products') =>{
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
    const dataJSON = fs.readFileSync(pathJSON, 'utf-8');
    const dataJS = JSON.parse(dataJSON);
    return dataJS
    };
*/
const saveData = (data, filenameJSON = 'products') => {
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
    const dataSTRING = JSON.stringify(data, null, 3);
    fs.writeFileSync(pathJSON, dataSTRING, 'utf-8')
    };

const loadData = (filenameJSON = "products") => {
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
      
    if (!fs.existsSync(pathJSON)) {
        fs.writeFileSync(pathJSON, "[]", "utf-8");
    }
        
    const fileJSON = fs.readFileSync(pathJSON, "utf-8");
    const JsonParser = JSON.parse(fileJSON);
    return JsonParser;
    };

    module.exports = {
//        readData,
        saveData,
        loadData
    }