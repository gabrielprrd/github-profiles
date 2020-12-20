import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: ${({ theme }) => theme.padding};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

export default Button;
