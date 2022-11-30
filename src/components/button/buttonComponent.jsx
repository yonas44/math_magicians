import PropTypes from 'prop-types';
import './buttonComponentStyle.css';

const Button = (props) => {
  const { value, role, handleChange } = props;
  const btnClass = `btn ${role === 'operator' ? 'orange' : ''} ${
    value === '0' ? 'large' : ''
  }`;

  return (
    <button className={btnClass} type="submit" id={role} onClick={handleChange}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: null,
  role: null,
  handleChange: null,
};

Button.propTypes = {
  value: PropTypes.string,
  role: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Button;
