import styled from '@emotion/styled'
import Tag from './Tag'

interface TitleProps {
  name: string;
  description: string;
  tags: string[];
}

const Title: React.FC<TitleProps> = ({ name, description, tags }) => {
    return (
        <Container>
        <TitleContainer>
            <h4>{name}</h4>
            {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
            ))}
        </TitleContainer>
        <p>{description}</p>
        </Container>
    );
};

export default Title;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;

    h4 {
        font-size: 16px;
        font-weight: 500;
        margin: 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 20px;

    p {
        font-size: 14px;
        font-weight: 500;
        color: #8D8D8D;
        margin: 4px 0 0 0;
    }
`;
