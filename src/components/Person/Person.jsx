import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let partner = '';

  if (isMarried && sex === 'm') {
    partner = 'wife';
  } else if (isMarried && sex === 'f') {
    partner = 'husband';
  } else {
    partner = null;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      <p className="Person__partner">
        {partner === null
          ? `I am not married`
          : `${partnerName} is my ${partner}`}
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
