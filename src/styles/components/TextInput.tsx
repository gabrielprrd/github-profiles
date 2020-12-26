import styled from 'styled-components';
import device from '../device';

export const TextInput = styled.input`
  border: 4px solid ${({ theme }) => theme.colors.highlightSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.padding};
  background: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${device.tablet} {
    margin: 5px;
  }
`;
