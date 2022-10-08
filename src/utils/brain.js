import { deleteLastOperator } from "./helpers"

export const calculate = (data) => {

    data = deleteLastOperator(data);

    data = eval(data);

    return data;
}

export const factorial = (e) => {
    let result = 1;
    for (let i = 1; i <= e; i++) {
        result = result * i;
    }
    console.log(result)
    return result;
  }