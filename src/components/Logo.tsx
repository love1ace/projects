import styled from '@emotion/styled'

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
    return (
        <LogoContainer>
            <LogoImage src={src} alt="logo" />
        </LogoContainer>
    );
};

export default Logo;

const LogoContainer = styled.div`
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: #F0F0F0;
    border: 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 25px;
`;

const LogoImage = styled.img`
    width: 28px;
    height: 28px;

`;
