

export const findNames = (arr)=> arr.map(a=> a.name);

export const findAvailableAccounts = (arr, key) => arr.filter(e =>e !== key);
export const findIndTo = (arr, value) =>{
    let accountIndex = arr.findIndex(e => e.name === value);
    return arr[accountIndex];
}

export const findIndFrom = (arr, key) =>{
    let accountFromIndex = arr.findIndex(e =>e.id=== key)
    return  arr[accountFromIndex];
}




