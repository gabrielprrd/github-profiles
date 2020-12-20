import React from 'react';
import Button from '../styles/components/Button';

interface Props {
  label: string;
}

const SubmitButton: React.FC<Props> = ({ label }) => (
  <Button type="submit" aria-label="submit button" data-testid="submit-button">
    {label}
  </Button>
);

export default SubmitButton;
