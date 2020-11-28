import React from 'react';

interface Props {
  value: string;
}

const SubmitButton: React.FC<Props> = ({ value }: Props) => (
  <input type="submit" aria-label="submit button" value={value} />
);

export default SubmitButton;
