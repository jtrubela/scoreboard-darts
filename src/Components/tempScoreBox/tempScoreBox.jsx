import PropTypes from 'prop-types';
import './tempScoreBox.css'

function TempScoreBox({ tempScore }) {
  return (
    <div id='TempScore' className='temp-score-box'>
      {tempScore}
    </div>
  );
}

TempScoreBox.propTypes = {
  tempScore: PropTypes.number.isRequired,
};

export default TempScoreBox;