import styled from 'styled-components';
import device from '../device';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.secondary};
  width: 90%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 40px;
  margin-top: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 20px;

    h1 {
      font-size: 1.5em;
    }
  }
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
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p,
  a {
    margin-top: 2px;
  }

  @media ${device.tablet} {
    margin-top: 15px;
  }
`;
