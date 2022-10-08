
export const deleteLastOperator = (formule) => {
    const lastLetter = formule.substring(formule.length - 1, formule.length);

    if (lastLetter === '+' || lastLetter === '-'
        || lastLetter === '*' || lastLetter === '/')

        formule = formule.substring(0, formule.length - 1)
    return formule;
}


export const analizeFormula = (formula) => {

    let formule = formula.replace('%', '*');
    const lastLetter = formule.substring(formule.length - 1, formule.length);

    if (lastLetter === '+' || lastLetter === '-'
        || lastLetter === '*' || lastLetter === '/')
        formule = formule.substring(0, formule.length - 1)
    return formule;
}

export const changeMinusPlus = (formula) => {

    let formule = formula;
    const firstLetter = formule.substring(0, 1);
    if (firstLetter === '-')
        formule = formule.substring(1)
    else
        formule = '-' + formule;
    return formule;

}