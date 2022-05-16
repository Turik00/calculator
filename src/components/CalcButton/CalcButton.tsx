import { useDispatch } from 'react-redux';
import { calcAction } from '../../store/calc-state/calculatorSlice';

const CalcButton = (props: any) => {
  const { buttonText } = props;
  const dispatch = useDispatch();
  let btnStyle = 'btn-primary';

  if (buttonText === '=') {
    btnStyle = 'btn-warning';
  } else if (buttonText === 'AC') {
    btnStyle = 'btn-danger';
  } else if (isNaN(buttonText)) {
    btnStyle = 'btn-success';
  }

  return (
    <button type="button" className={`btn ${btnStyle}`} onClick={() => dispatch(calcAction(buttonText))}>
      {buttonText}
    </button>
  );
};

export default CalcButton;
