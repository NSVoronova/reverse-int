module.exports = function reverse (n) {
  let array =  Array.from(String(n));
  if(n<0) {array.splice(0,1)};
  let newArray = array.reverse(); 
  newString = newArray.join("");
  return +newString;
}
