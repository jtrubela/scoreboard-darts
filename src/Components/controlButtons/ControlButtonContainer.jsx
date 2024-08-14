import PropTypes from 'prop-types';

function ControlButtonContainer ({children}){
    return (
      <div id='ControlButton' className='control-buttons-container'>
        {children}
      </div>
    )
  }
  
  ControlButtonContainer.propTypes = {
    children: PropTypes.node,
  };

  export default ControlButtonContainer;
