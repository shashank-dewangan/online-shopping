import React from 'react';

const Rating = ({ color, value, text }) => {
  return (
    <div className="rating">
      <i
        style={{ color }}
        className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }
      />
      <i
        style={{ color }}
        className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }
      />
      <i
        style={{ color }}
        className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }
      />
      <i
        style={{ color }}
        className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }
      />
      <i
        style={{ color }}
        className={
          value >= 1
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }
      />
      {`${text} reviews`}
    </div>
  );
};
Rating.defaultProps = {
  color: '#f8e825',
};
export default Rating;
