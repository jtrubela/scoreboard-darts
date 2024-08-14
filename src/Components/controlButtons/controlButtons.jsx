import PropTypes from 'prop-types';
import ControlButton from './ControlButton';
import TempScoreBox from '../tempScoreBox/tempScoreBox';
import ControlButtonContainer from './ControlButtonContainer';
import './ControlButton.css';

/**===========================================================================
 *                        ControlButtons
 * 
 * Component that renders a container with control buttons and a temporary score box.
 * 
 * @param {number} tempScore - The temporary score to display.
 * @param {function} updateScore - Function to call when the Enter button is clicked.
 * @param {function} undoScore - Function to call when the Undo button is clicked.
 *===========================================================================**/
export default function ControlButtons({ tempScore, updateScore, undoScore }) {
  return (
    <ControlButtonContainer>
      <div id='ControlButton' className='control-buttons-container'>
        <ControlButton displayName="Undo" onClick={undoScore} />
        <TempScoreBox tempScore={tempScore}>{tempScore}</TempScoreBox>
        <ControlButton displayName="Enter" onClick={updateScore} />
      </div>
    </ControlButtonContainer>
  );
}

ControlButtons.propTypes = {
  tempScore: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
  undoScore: PropTypes.func.isRequired,
};
