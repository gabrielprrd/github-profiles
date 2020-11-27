import React from 'react';

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ onChange }) => (
  <input type="text" onChange={onChange} />
);

export default TextInput;
