import React from 'react';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const TextInput: React.FC<Props> = ({ onChange, placeHolder }) => (
  <input
    type="text"
    onChange={onChange}
    defaultValue=""
    placeholder={placeHolder}
    data-testid="text-input"
    required
  />
);

export default TextInput;
