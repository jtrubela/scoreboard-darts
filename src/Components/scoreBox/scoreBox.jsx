// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './scoreBox.css'

export default function ScoreBox({ teamName, score }) {
  return (
    <div id='ScoreBored' className='score-inning-container'>
      <ScoreContainer>
        <TeamScoreTitle   teamName={teamName}  />
        <div className="score-total">{score}</div>
      </ScoreContainer>
    </div>
  );
}
ScoreBox.propTypes = {
  teamName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};


function TeamScoreTitle({teamName}) {
  return (
    <>        
      <div className="team-name">{teamName}</div>
      <div className="divider"></div> 
    </>
  );
}
TeamScoreTitle.propTypes = {
  teamName: PropTypes.string.isRequired,
};
  

function ScoreContainer({ children }) {
  return (
    <div id='ScoreBox' >
      <div className="score-container">
        {children}
      </div>
    </div>
  );
}
ScoreContainer.propTypes = {
  children: PropTypes.node.isRequired,
};