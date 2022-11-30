import PropTypes from 'prop-types';
import './buttonComponentStyle.css';

const Button = (props) => {
  const { value, role } = props;
  const btnClass = `btn ${role === 'operator' ? 'orange' : ''} ${
    value === '0' ? 'large' : ''
  }`;

  return (
    <button className={btnClass} type="submit" id={role}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: null,
  role: null,
};

Button.propTypes = {
  value: PropTypes.string,
  role: PropTypes.string,
};

export default Button;
