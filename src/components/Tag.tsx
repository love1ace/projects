import styled from '@emotion/styled'

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <TagContainer status={text}>
            <span>{text}</span>
        </TagContainer>
    )
}

export default Tag;

interface TagContainerProps {
  status: string;
}

const TagContainer = styled.div<TagContainerProps>`
    border-radius: 16px;
    background-color: ${props => {
        switch(props.status.toLowerCase()) {
            case 'discontinued':
                return '#FFBDBD';
            case 'active':
                return '#C5FFC1';
            default:
                return '#F4F6FA';
        }
    }};
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 500;
    margin: 0 0 0 10px;
`;