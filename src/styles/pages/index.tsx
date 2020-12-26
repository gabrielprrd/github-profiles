import styled from 'styled-components';
import device from '../device';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;

  form {
    display: flex;
  }

  svg {
    width: 100vw;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -0;
  }

  @media ${device.tablet} {
    padding: 0.8rem;
  }
`;
