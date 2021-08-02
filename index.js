
import { readFile } from "fs";


const file = process.argv[2];
console.log(file)

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

 const handleFileRead = (error, content) => {

  if(error){
    console.log(`error ${error}`)
  }

   const lines = content.split('\n');
  console.log(lines)
  
  for(let i=0 ; i< lines.length ; i +=1){
    console.log(lines[i].includes('background-color')&&lines[i].includes('#'))
    if(lines[i].includes('background-color')&&lines[i].includes('#')){
    const firstHash = lines[i].indexOf("#");
    const lastCharacter = lines[i].indexOf(';')
    const hexValue = lines[i].substring(firstHash, lastCharacter)
    console.log(hexValue)
    const rgbValue =hexToRgb(hexValue)
    console.log(rgbValue)
    }
    
    if(lines[i].includes('rgb')){
      console.log(lines[i].includes('rgb'))
      const firstBracket = lines[i].indexOf("(");
      const secondBracket = lines[i].indexOf(")");
      const rgbValue =lines[i].substring(firstBracket+1, secondBracket)
      const rgbSplitNumArrayIndiv =rgbValue.split(',')
      // const hexValue =rgbToHex(r, g, b) 
      console.log(rgbSplitNumArrayIndiv)
      console.log(rgbSplitNumArrayIndiv[0])
      console.log(rgbSplitNumArrayIndiv[1])
      console.log(rgbSplitNumArrayIndiv[2])
      const hexValue =rgbToHex(Number(rgbSplitNumArrayIndiv[0]), Number(rgbSplitNumArrayIndiv[1]), Number(rgbSplitNumArrayIndiv[2]))
      console.log(hexValue)
    }
   
    
  }
 }

readFile(file, 'utf8', handleFileRead)

