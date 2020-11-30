import React, { useEffect } from 'react';

interface Props {
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ onChange, placeHolder }) => (
  <input type="text" onChange={onChange} placeholder={placeHolder} required />
);

export default TextInput;
