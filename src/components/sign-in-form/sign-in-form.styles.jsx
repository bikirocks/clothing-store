import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 2000px;
    padding: 0 500px 0 0px;
    flex-direction: column;
    h2 {
      margin: 0px 0;
    }
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 0px;
    
  }
`;