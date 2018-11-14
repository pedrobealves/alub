import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <React.Fragment>
      <div className={classnames('form-group label-floating is-focused', {
        'has-error': error
      })}>
        <label className="control-label">{placeholder}</label>
        <input
          type={type}
          className={classnames('form-control', {
            'form-control-danger is-invalid': error
          })}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {info && <small className="form-text text-muted">{info}</small>}
      </div>
      {error && <p class="text-danger">{error}</p>}
    </React.Fragment>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
