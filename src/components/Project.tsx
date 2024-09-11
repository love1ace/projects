import styled from '@emotion/styled'
import Logo from './Logo'
import Title from './Title'
import { projects } from '../data/projects'

export const Project = () => {
    return (
        <ProjectsWrapper>
            {projects.map(project => (
                <ProjectContainer key={project.id} onClick={() => window.open(project.link, '_blank')}>  
                    <Logo src={project.logo} />
                    <Title name={project.name} description={project.description} tags={project.tags} />
                </ProjectContainer>
            ))}
        </ProjectsWrapper>
    );
};

export default Project;

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 860px;
    margin: 0 auto;
    user-select: none;
    cursor: default;
`;

const ProjectContainer = styled.div`
    border-radius: 8px;
    width: 420px;
    height: 90px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: left;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }
`;
