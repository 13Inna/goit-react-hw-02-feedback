import PropTypes from 'prop-types';
import { container, title } from './Section.module.css';

export const Section = ({ title, children }) => (
  <container>
    <title>{title}</title>
    {children}
  </container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

