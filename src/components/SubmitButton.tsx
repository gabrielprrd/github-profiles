import React from 'react';

interface Props {
  label: string;
}

const SubmitButton: React.FC<Props> = ({ label }) => (
  <button type="submit" aria-label="submit button" data-testid="submit-button">
    {label}
  </button>
);

export default SubmitButton;
