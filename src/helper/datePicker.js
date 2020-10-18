

export  const month = (date)=> {
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    return monthName[date.getMonth()]
}



export const sortByMonth = (arr, thisMonth) => arr.filter(e => thisMonth === e.month) 