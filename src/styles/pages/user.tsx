import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.secondary};
  width: 90%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 70px;
  margin-top: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  img {
    border-radius: 100%;
    width: 200px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p,
  a {
    margin-top: 2px;
  }
`;
