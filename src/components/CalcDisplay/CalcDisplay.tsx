import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './CalcDisplay.css';

const CalcDisplay = () => {
    const calcDisplay = useSelector((state: RootState) => state.calculator.display);
    return (
        <div className='calc-screen text-bg-secondary'>
            <span className='calc-digits'>{calcDisplay}</span>
        </div>
    )
}

export default CalcDisplay;