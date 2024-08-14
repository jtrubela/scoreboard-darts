import PropTypes from 'prop-types';
import './InningBox.css'; 

export default function InningBox({ inningNum, isTop }) {
  return (
    <>
      <div id="InningBox" className="inning-box"> 
        <div className="inning-header">Inning</div>
          <div id="InningBox" className="inning-container">
              <div className="inning-content">
            <InningArrows isTop={isTop}></InningArrows>
            <InningNumber inningNum={inningNum} />
            </div>
        </div>
      </div>
    </>
  );
}

InningBox.propTypes = {
  inningNum: PropTypes.number.isRequired,
  isTop: PropTypes.bool.isRequired,
};

/**================================================================================================
 *                                           Component Elements
 *  InningBox - Contains the inner elements
 *    -->InningNumber
 *      |
 *      |-->InningArrows
 *      |-->InningIndicators
 *  
 *  
 *  See .css file for styling
 *================================================================================================**/


function InningNumber({ inningNum }) {
  return (
    <div className="inning-number">
      {inningNum}
    </div>
  );
}

InningNumber.propTypes = {
  inningNum: PropTypes.number.isRequired,
};


function InningArrows(props) {
  return (
    <div className='flex-auto'>
        <ArrowIndicator isTop={true} isCurrentInning={props.isTop} />
        <ArrowIndicator isTop={false} isCurrentInning={!props.isTop} />
   </div>
  );
}

InningArrows.propTypes = {
  isTop: PropTypes.bool.isRequired,
};


function ArrowIndicator({ isTop, isCurrentInning }) {
  return (
    <div className="arrow-box">
      {isTop ? 
        <div className={`top-arrow ${isCurrentInning ? 'illuminated' : 'not-illuminated'}`}>▲</div> 
        : 
        <div className={`bottom-arrow ${isCurrentInning ? 'illuminated' : 'not-illuminated'}`}>▼</div>}
    </div>
  );
}

ArrowIndicator.propTypes = {
  isTop: PropTypes.bool.isRequired,
  isCurrentInning: PropTypes.bool.isRequired,
};