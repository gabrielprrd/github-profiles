import styled from 'styled-components';

export const TextInput = styled.input`
  border: 4px solid ${({ theme }) => theme.colors.highlightSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.padding};
  background: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
