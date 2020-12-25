import React from 'react';
import * as S from '../styles/components/TextInput';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const TextInput: React.FC<Props> = ({ onChange, placeHolder }) => (
  <S.TextInput
    type="text"
    onChange={onChange}
    placeholder={placeHolder}
    data-testid="text-input"
    required
  />
);

export default TextInput;
