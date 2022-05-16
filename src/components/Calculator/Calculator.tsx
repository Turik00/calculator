import CalcButtonsContainer from '../CalcButtonsContainer/CalcButtonsContainer';
import CalcDisplay from '../CalcDisplay/CalcDisplay';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className='calc-container'>
      <CalcDisplay />
      <CalcButtonsContainer />
    </div>
  );
};

export default Calculator;
