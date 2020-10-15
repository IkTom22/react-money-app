
// Accepts the array and key
export const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object

 
};
export const sumProps = prop => (sum, obj) => sum += obj[prop];

//export const sumAmount = (arr) =>arr.reduce((prev, cur)=> prev + cur.amount, 0)
// export const sumAmount =  (a, key) => {
//   let totalAmount;
//     for (let i = 0; i < a[key[i]].length; i++) 
//       totalAmount = a[key[i]].reduce((prev, cur)=> prev + cur.amount, 0)
    
//     return totalAmount;
// }  


// export let groupedTotal = (arr)=>arr.map((a)=>{
//   return a[sumAmount(a)]
// })

export const sumAmount = (cat, group) =>cat.map(e => {
  return  {'title': e,  'amount':group[e].reduce((prev, cur)=>{
      return prev + cur.amount
  }, 0)} ;
})