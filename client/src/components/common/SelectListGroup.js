import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, error, info, onChange, options, placeholder }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <React.Fragment>
      <div className={classnames('form-group label-floating is-focused', {
        'has-error': error
      })}>
        <label className="control-label">{placeholder}</label>
        <select
          className={classnames('form-control form-control-lg ', {
            'is-invalid': error
          })}
          name={name}
          value={value}
          onChange={onChange}
        >
          {selectOptions}
        </select>
        {info && <small className="form-text text-muted">{info}</small>}
      </div>
      {error && <div className="invalid-feedback">{error}</div>}

    </React.Fragment>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
