import React, {Component} from 'react';
import {connect} from "react-redux";
import WithArrowButton   from '../../../generics/buttons/WithArrowButton';
import Header from '../../../generics/Header';
import ButtonCardWrapper from '../../../generics/cards/buttonCards/ButtonsCardWrapper';
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
    type:'classic'
  },
  {
    icon: <FolderWithStarSvg/>,
    title: 'Try a next-gen project',
    content: 'Easy setup and reimagined features. Created and managed by project team members.',
    type:'newGen'
  }
];

class Projects extends Component {

  constructor(props) {
    super(props)

  }

  onCreateProjectClick = type => () => {
    const {isHidden, showSidebarPortal} = this.props;

    if (!isHidden) return;

    showSidebarPortal({component: PORTAL_COMPONENTS.CREATE_PROJECT, width: '100vw', additionalData:{type}})
  };

  render() {

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
        </div>
      </StyledProjects>
    )
  }
}

Projects.propTypes = {};

export default connect(({sidebarPortal}) => ({
    isHidden: sidebarPortal.isHidden,
    component: sidebarPortal.component,
    width: sidebarPortal.width
  }),
  {showSidebarPortal: SIDEBAR_PORTAL_ACTIONS.showPortal})(Projects)