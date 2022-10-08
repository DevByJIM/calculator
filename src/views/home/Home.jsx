import { useState } from 'react';
import { calculate, factorial } from '../../utils/brain';
import { analizeFormula, changeMinusPlus } from '../../utils/helpers';
import './home.css'

const Home = () => {

  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('0');

  const writeData = (e) => {
    let dato = e.target.textContent;
    operation === '0' ? setOperation(dato) : setOperation(operation + dato)
  }
  const calculateData = (e) => {
    console.log(operation)
    switch (e.target.name) {
      case 'factorial':
        setResult(factorial(operation));
        break;
      case 'reset':
        setResult('0');
        setOperation('0');
        break;
      case 'raiz':
        setResult(Math.sqrt(analizeFormula(operation)));
        break;
        case 'masmenos':
          setOperation(changeMinusPlus(operation));
          break;
      case 'porcentaje':
        const formula = analizeFormula(operation)
        setOperation(formula);
        setResult(eval(formula) / 100 + '%');
        break;
      case 'delete':
        if (operation.length <= 1)
          setOperation('0');
        else
          setOperation(operation.substring(0, operation.length - 1));
        break;

      default:
        setResult(calculate(operation));
    }

  }


  return (
    <>
      <div className='container-home'>

        <section className='display'>
          <h4 className='result'>{result}</h4>
          <h3 className='operation'>{operation}</h3>
        </section>
        <section className='keyboard'>

          <button name='masmenos' className='function' onClick={calculateData}>±</button>
          <button name='delete' className='function' onClick={calculateData}>←</button>
          <button name='reset' className='function reset' onClick={calculateData}>C</button>

          <button name='7' className='number' onClick={writeData}>7</button>
          <button name='8' className='number' onClick={writeData}>8</button>
          <button name='9' className='number' onClick={writeData}>9</button>
          <button name='suma' className='operator ' onClick={writeData}>+</button>

          <button name='4' className='number' onClick={writeData}>4</button>
          <button name='5' className='number' onClick={writeData}>5</button>
          <button name='6' className='number' onClick={writeData}>6</button>
          <button name='resta' className='operator' onClick={writeData}>-</button>

          <button name='1' className='number' onClick={writeData}>1</button>
          <button name='2' className='number' onClick={writeData}>2</button>
          <button name='3' className='number' onClick={writeData}>3</button>
          <button name='multiplicacion' className='operator' onClick={writeData}>*</button>

          <button name='.' className='number' onClick={writeData}>.</button>
          <button name='0' className='number ' onClick={writeData}>0</button>
          <button name='raiz' className='operator' onClick={calculateData} >√</button>
          <button name='division' className='operator' onClick={writeData}>/</button>

          <button name='porcentaje' className='operator' onClick={calculateData}>%</button>
          <button name='factorial' className='operator' onClick={calculateData}>!</button>
          <button name='igual' className='function igual ' onClick={calculateData}>=</button>

        </section>

      </div>
    </>
  )
}
export default Home