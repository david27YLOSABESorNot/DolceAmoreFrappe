

export const currencyFormatter = ({currency}, price) =>{

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
    })

    return formatter.format(price)
}


