import PropTypes from 'prop-types';
import ScoreBox from './scoreBox';
import InningBox from '../inningBox/inningBox';

function ScoreBoxes({ awayScores, homeScores, isTop, currentInning }) {
    return (
      <div className="score-boxes-container">
        <ScoreBox teamName="Away" score={awayScores.reduce((a, b) => a + b, 0)} />
        <InningBox inningNum={currentInning + 1} isTop={isTop} />
        <ScoreBox teamName="Home" score={homeScores.reduce((a, b) => a + b, 0)} />
      </div>
    );
}

ScoreBoxes.propTypes = {
  awayScores: PropTypes.arrayOf(PropTypes.number).isRequired,
  homeScores: PropTypes.arrayOf(PropTypes.number).isRequired,
  isTop: PropTypes.bool.isRequired,
  currentInning: PropTypes.number.isRequired,
};

export default ScoreBoxes;
