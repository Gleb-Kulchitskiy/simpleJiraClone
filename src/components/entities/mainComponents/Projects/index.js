import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import WithArrowButton from '../../../generics/buttons/WithArrowButton';
import Header from '../../../generics/Header';
import ProjectCard from '../../../generics/cards/ProjectCard';
import ButtonCardWrapper from '../../../generics/cards/buttonCards/ButtonsCardWrapper';
import PlainInput from '../../../generics/inputs/PlainInput';

import PORTAL_COMPONENTS from "../../portalComponents";

import SIDEBAR_PORTAL_ACTIONS from "../../../../redux/sidebarPortal/actions";

import StyledProjects from './StyledProjects';

import {ReactComponent as FolderSvg} from '../../../../icons/svg/folder.svg';
import {ReactComponent as FolderWithStarSvg} from '../../../../icons/svg/folder_with_star.svg';

const createButtonCards = [
  {
    icon: <FolderSvg/>,
    title: 'Classic project',
    content: 'All the power and functionality you expect. Created and managed by your Jira admin.',
    type: 'classic'
  },
  {
    icon: <FolderWithStarSvg/>,
    title: 'Try a next-gen project',
    content: 'Easy setup and reimagined features. Created and managed by project team members.',
    type: 'newGen'
  }
];

class Projects extends Component {

  constructor(props) {
    super(props)

  }

  onCreateProjectClick = type => () => {
    const {isHidden, showSidebarPortal} = this.props;

    if (!isHidden) return;

    showSidebarPortal({component: PORTAL_COMPONENTS.CREATE_PROJECT, width: '100vw', additionalData: {type}})
  };

  onStarClick = () => {
    //todo
  };

  onProjectClick = () => {
    //todo
  };

  render() {

    const {projects} = this.props;
    const recentProjects = projects.sort((a, b) => a.updated_at > b.updated_at).slice(0, 4);

    return (
      <StyledProjects>
        <header className='header_wrapper'>
          <Header>Projects</Header>
          <WithArrowButton
            title='Create Project'
            render={props => (
              <>
                {
                  props.isOpen &&
                  <ButtonCardWrapper
                    onItemClick={this.onCreateProjectClick}
                    styles={{top: '40px', right: 0}}
                    data={createButtonCards}
                  />
                }
              </>
            )}
          />
        </header>
        <div className='projects_wrapper'>
          <div className='title'>Recents</div>
          <div className='projects_list_wrapper'>
            {recentProjects.map(project => (
              <ProjectCard
                onProjectClick={this.onProjectClick}
                onStarClick={this.onStarClick}
                key={project.id}
                starred={project.starred}
                title={project.title}
                type={project.type}
                projectKey={project.key}
              />
            ))}
          </div>
        </div>
        <div className='options_wrapper'>
          <PlainInput/>
        </div>
      </StyledProjects>
    )
  }
}

Projects.propTypes = {
  isHidden: PropTypes.bool,
  component: PropTypes.string,
  width: PropTypes.string,
  projects: PropTypes.array
};

export default connect(({sidebarPortal, projects}) => ({
    isHidden: sidebarPortal.isHidden,
    component: sidebarPortal.component,
    width: sidebarPortal.width,
    projects: projects.data
  }),
  {showSidebarPortal: SIDEBAR_PORTAL_ACTIONS.showPortal})(Projects)