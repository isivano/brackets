module.exports = function check(str, bracketsConfig) {
  let pairExist = chars => {
    let exist = false;
    for (let i=0; i<bracketsConfig.length; i++){
      if (chars[0] === bracketsConfig[i][0] && chars[1] === bracketsConfig[i][1]) {
        exist = true;
        break;
      };
    }
    return exist;
  }

  if (str.length % 2 === 0) {
    let i = 0;
    while (i < str.length-1) {
      if (pairExist(str[i]+str[i+1])) {
        str = str.substring(0,i) + str.substring(i+2);
        i = 0;
      } else i++;
    } 
  } else return false;

  if (str.length === 0) return true;
  else return false; 
}
