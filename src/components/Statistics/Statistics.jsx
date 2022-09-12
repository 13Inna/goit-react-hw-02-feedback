import PropTypes from 'prop-types';
import { list } from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <list>
      Good: <span>{good}</span>
    </list>
    <list>
      Neutral: <span>{neutral}</span>
    </list>
    <list>
      Bad: <span>{bad}</span>
    </list>
    <list>
      Total: <span>{total}</span>
    </list>
    <list>
      Positive feedback: <span>{positivePercentage}%</span>
    </list>
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
