import React from 'react'
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import {ReactComponent as ProjectAvatarSvg} from '../../../../icons/svg/project_avatar.svg'
import {ReactComponent as StarSvg} from '../../../../icons/svg/star.svg';
import {ReactComponent as FullStarSvg} from '../../../../icons/svg/full_star.svg';
import {ReactComponent as LatticeSvg} from '../../../../icons/svg/lattice.svg';

import StyledProjectCard from './StyledProjectCard';

function ProjectCard(props) {
  const {starred, title, type, projectKey, onStarClick, onProjectClick} = props;

  return (
    <StyledProjectCard starred={starred}>
      <div className='top_content_wrapper'
           onClick={onProjectClick}
      >
        <div
          className='star'
          data-class="tooltip_overlap"
          data-delay-show="400"
          data-delay-hide="400"
          data-tip={starred ? 'Unstar' : 'Star'}
          onClick={onStarClick}
        >
          {starred ? <FullStarSvg/> : <StarSvg/>}
        </div>
        <ReactTooltip place="bottom" type="dark" effect="solid"/>
        <div className='top_content'>
          <ProjectAvatarSvg/>
          <div className='content_wrapper'>
            <span className='project_name'>
              {title}
            </span>
            <span className='project_type'>
              {type}
            </span>
          </div>
        </div>
      </div>
      <div className='bottom_content_wrapper'>
        <div className='bottom_content'
             onClick={onProjectClick}
        >
          <LatticeSvg/>
          <span className='board_name'>
            {projectKey} board
          </span>
        </div>
      </div>
    </StyledProjectCard>
  )
}

ProjectCard.propTypes = {
  starred: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  projectKey: PropTypes.string,
  onStarClick: PropTypes.func,
  onProjectClick: PropTypes.func
};

export default ProjectCard;