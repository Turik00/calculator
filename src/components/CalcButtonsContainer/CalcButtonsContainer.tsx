import { CalcButtons } from '../../consts/calc-buttons-config';
import CalcButton from '../CalcButton/CalcButton';
import './CalcButtonsContainer.css';

const CalcButtonsContainer = () => {
  return (
    <div className="calc-buttons-container">
      {CalcButtons.map((btn: string | number) => (
        <CalcButton key={btn} buttonText={btn}></CalcButton>
      ))}
    </div>
  );
};

export default CalcButtonsContainer;
