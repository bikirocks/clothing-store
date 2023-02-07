import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {

    position: absolute;
    left:-500px
    width: 300px;
    height: 100px;
    h2 {
      // margin: 350px 0;
      margin-top: 400px;
    }
  }

`;