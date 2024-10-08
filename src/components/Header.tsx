import styled from '@emotion/styled'
import '../styles/global.css'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>DONGYEONG KIM</h1>
      <p>I find so much joy and happiness in coding 😎</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 26px;
        font-weight: 600;
        margin: 60px 0 10px 0;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 20px 0;
    }
`;