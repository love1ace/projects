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
                    {project.tags.includes('Discontinued') && <DiscontinuedOverlay />}
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
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }
`;

const DiscontinuedOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(243, 243, 243, 0);
    z-index: 1;
`;
