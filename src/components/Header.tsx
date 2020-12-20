import React, { useState, useEffect, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import * as S from '../styles/components/Header';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <S.Header>
      <h1>Github Profiles</h1>
      {isMounted && (
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.highlightSecondary}
          onColor={colors.secondary}
          id="theme-switcher"
        />
      )}
    </S.Header>
  );
};

export default Header;
