
// Accepts the array and key
export const groupBy = (array, key) => {
  // Return the end resul
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

export const sumAmount = (cat, group) =>cat.map(e => {
  return  {'title': e,  'amount':group[e].reduce((prev, cur)=>{
      return prev + cur.amount
  }, 0)} ;
})

export const sumTotal = (arr) => arr.reduce((prev, cur) =>{
  return prev + cur.amount
}, 0  );