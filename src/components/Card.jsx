import PropTypes from 'prop-types';
import '../styles/components/Card.css';

export default function Card({ title, image, children }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__img" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__body">{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};
