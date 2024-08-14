/**==============================================
 * *                Keypad
 *  Inning Arrows css styling
 *  Container - keypad-container,keypad-button
 *
 *  TODO - Contraints - 
 *     Media Types: Large Device, Small Device
 *  
 *=============================================**/
/* src/Components/Keypad/Keypad.jsx */

import PropTypes from 'prop-types';
import './Keypad.css'

export default function Keypad({ setTempScore }) {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  /* testing with buttons underneath for aritmetic;    */ 
  /* const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 'undo', 0,'enter']; */

  return (
    <div id="Keypad" className="keypad-wrapper">
      <KeypadContainer>
        {numbers.map((number, index) => (
          <KeypadButton
            key={index}
            number={number}
            onClick={setTempScore}
            isZero={number === 0}
          />
        ))}
      </KeypadContainer>
    </div>
  );
}
Keypad.propTypes = {
  setTempScore: PropTypes.func.isRequired,
};


/**=======================================================================================================================
 *                                                     Component Elements
 *  KeypadContainer -  holds the elements
 *    ->KeypadButton
 *  
 * Refer to .css file for styling
 *=======================================================================================================================**/
function KeypadContainer({ children }) {
  return <div className={"keypad-container"}>{children}</div>;
}
KeypadContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

/**=======================================================================================================================
 *
 *    Keyypad - Button   
 * 
 * /**=======================================================================================================================*/
function KeypadButton({ number, onClick, isZero }) {
  return (
    <button
      className={`keypad-button ${isZero ? 'zero-button' : ''}`}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
KeypadButton.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isZero: PropTypes.bool,
};

/* !SECTION - Default props */
/*=======================================================================================================================*/

KeypadButton.defaultProps = {
  isZero: false,
};