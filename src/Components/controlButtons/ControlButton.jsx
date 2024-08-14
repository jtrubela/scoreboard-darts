import PropTypes from 'prop-types';
import './ControlButton.css';

/**===========================================================================
 *                          ControlButton
 * 
 * Component that renders a control button with a display name and click handler.
 * 
 * @param {string} displayName - The text to display on the button.
 * @param {function} onClick - Function to call when the button is clicked.
 *===========================================================================**/
function ControlButton({ displayName, onClick }) {
  return (
    <button id='ControlButton' className='control-button' onClick={onClick}>
      {displayName}
    </button>
  );
}

ControlButton.propTypes = {
  displayName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ControlButton;

/**===========================================================================
 *                      ControlButtonContainer
 * 
 * Container component that wraps around control buttons.
 * 
 * @param {node} children - The child components (control buttons) to be displayed inside the container.
 *===========================================================================**/
function ControlButtonContainer({ children }) {
  return (
    <div id='ControlButton' className='control-buttons-container'>
      {children}
    </div>
  );
}

ControlButtonContainer.propTypes = {
  children: PropTypes.node,
};
