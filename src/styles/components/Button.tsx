import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 10px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default Button;
