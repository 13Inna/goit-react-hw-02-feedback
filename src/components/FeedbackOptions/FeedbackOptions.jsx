import PropTypes from 'prop-types';
import {button} from './FeeddbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
