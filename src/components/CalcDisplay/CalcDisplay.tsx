import { useDispatch, useSelector } from 'react-redux';
import { calcChangeInputAction } from '../../store/calc-state/calculatorSlice';
import { RootState } from '../../store/store';
import './CalcDisplay.css';

const CalcDisplay = () => {
  const calcDisplay = useSelector((state: RootState) => state.calculator.display);
  const dispatch = useDispatch();
  return (
    <input
      className="calc-screen calc-digits text-bg-secondary"
      type="text"
      value={calcDisplay}
      onChange={(evt) => dispatch(calcChangeInputAction(evt.target.value))}
    />
  );
};

export default CalcDisplay;
