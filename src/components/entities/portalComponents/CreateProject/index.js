import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PlainButton from '../../../generics/buttons/PlainButton';
import PlainInput from '../../../generics/inputs/PlainInput';
import WithArrowButton from '../../../generics/buttons/WithArrowButton';

import StyledCreateProject from './StyledCreateProject';
import {ReactComponent as CanbanSvg} from '../../../../icons/svg/canban.svg'

class CreateProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projectName: ''
    }

  }

  onProjectNameChange = (e) => {
    const {target} = e;

    this.setState({projectName: target.value})
  };

  render() {
    const {type} = this.props;
    const {projectName} = this.state;

    return (
      <StyledCreateProject>
        <div className='create_project_container'>
          <div className='create_project_template_wrapper'>
            <div className='create_project_image_wrapper'>
              <CanbanSvg/>
            </div>
            <div className='create_project_title_wrapper'>
              Kanban
            </div>
            <div className='create_project_content_wrapper'>
              Monitor work in a continuous flow for agile teams ◦ Suits teams who control work volume from a backlog
            </div>
            <PlainButton
              title='Change template'
            />
          </div>
          <div className='create-project_wrapper'>
            <div className='title'>
              Create Project
            </div>
            <div className='input_container'>
              <span className='input_title'>name</span>
              <div className='input_wrapper'>
                <PlainInput
                  placeholder='Enter a Project Name'
                  value={projectName}
                  onChange={this.onProjectNameChange}
                />
              </div>
            </div>
            <div className='advanced_button_container'>
              <WithArrowButton
                leftSideArrow
                title='Advanced'
                mixin='naked'
              />
            </div>
          </div>
        </div>
      </StyledCreateProject>
    )
  }
}

CreateProject.propTypes = {};

export default CreateProject;