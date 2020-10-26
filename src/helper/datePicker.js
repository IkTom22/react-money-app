

export  const month = (date)=> {
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    return monthName[date.getMonth()]
}



export const sortByMonth = (arr, thisMonth, budgetYear) => {
        const sortByYear = arr.filter(e => budgetYear === e.year)
        return (
            sortByYear.filter(e => thisMonth === e.month)
        )
}