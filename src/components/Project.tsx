import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Title from './Title';
import { npmProjects } from '../data/npm';
import { webProjects } from '../data/projects';

export const Project: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'npm' | 'web'>('npm');
    const indicatorRef = useRef<HTMLDivElement>(null);
    const npmTabRef = useRef<HTMLButtonElement>(null);
    const webTabRef = useRef<HTMLButtonElement>(null);

    const handleTabClick = (tab: 'npm' | 'web') => {
        setSelectedTab(tab);
    };

    const displayedProjects = selectedTab === 'npm' ? npmProjects : webProjects;

    const updateIndicator = useCallback(() => {
        const indicator = indicatorRef.current;
        let activeTab: HTMLElement | null = null;

        if (selectedTab === 'npm' && npmTabRef.current) {
            activeTab = npmTabRef.current;
        } else if (selectedTab === 'web' && webTabRef.current) {
            activeTab = webTabRef.current;
        }

        if (indicator && activeTab) {
            const { offsetWidth, offsetLeft } = activeTab;
            indicator.style.width = `${offsetWidth}px`;
            indicator.style.left = `${offsetLeft}px`;
        }
    }, [selectedTab]);

    useEffect(() => {
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [updateIndicator]);

    return (
        <Container>
            <Tabs>
                <Tab
                    ref={npmTabRef}
                    className={`tab ${selectedTab === 'npm' ? 'active' : ''}`}
                    onClick={() => handleTabClick('npm')}
                >
                    npm
                </Tab>
                <Tab
                    ref={webTabRef}
                    className={`tab ${selectedTab === 'web' ? 'active' : ''}`}
                    onClick={() => handleTabClick('web')}
                >
                    Web
                </Tab>
                <Indicator ref={indicatorRef} />
            </Tabs>
            <ProjectsWrapper>
                {displayedProjects.map(project => (
                    <ProjectContainer key={project.id} onClick={() => window.open(project.link, '_blank')}>  
                        <Logo src={project.logo} alt={`${project.name} logo`} />
                        <Title name={project.name} description={project.description} tags={project.tags} />
                        {project.tags.includes('Discontinued') && <DiscontinuedOverlay />}
                    </ProjectContainer>
                ))}
            </ProjectsWrapper>
        </Container>
    );
};

export default Project;

const Container = styled.div`
    width: 100%;
`;

const Tabs = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 20px;
`;

interface TabProps {
    active?: boolean;
}

const Tab = styled.button<TabProps>`
    background-color: transparent;
    color: #444;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    margin: 0 20px;
    font-size: 16px;
    position: relative;

    &.active {
        color: #000;
    }
`;

const Indicator = styled.div`
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color: #000;
    transition: all 0.2s ease;
`;

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

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const DiscontinuedOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(243, 243, 243, 0.7);
    z-index: 1;
`;