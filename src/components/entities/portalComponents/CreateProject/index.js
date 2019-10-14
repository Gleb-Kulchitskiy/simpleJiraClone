import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PlainButton from '../../../generics/buttons/PlainButton';
import PlainInput from '../../../generics/inputs/PlainInput';
import WithArrowButton from '../../../generics/buttons/WithArrowButton';
import ImageButton from '../../../generics/buttons/ImageButton';
import PlainCard from '../../../generics/cards/PlainCard';

import StyledCreateProject from './StyledCreateProject';
import {ReactComponent as CanbanSvg} from '../../../../icons/svg/canban.svg'
import {ReactComponent as ExclamationPointSvg} from '../../../../icons/svg/exclamation_point.svg'

class CreateProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projectName: '',
      advanceKey: '',
      showAdvanced: false,
      showTip: false
    }

  }

  onProjectNameChange = (e) => {
    const {target} = e;

    const key = target.value.substring(0, 2).toUpperCase();

    this.setState({projectName: target.value, advanceKey: key})
  };

  onKeyChange = (e) => {
    const {target} = e;

    this.setState({advanceKey: target.value})
  };

  showAdvancedPart = (isOpen) => {
    this.setState({showAdvanced: isOpen})
  };

  createProject = () => {
    console.log('-1-',)
  };

  render() {
    const {type} = this.props;
    const {projectName, advanceKey, showAdvanced} = this.state;

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
              onClick={() => ({})}
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
                dontClose
                leftSideArrow
                title='Advanced'
                mixin='naked'
                onClick={this.showAdvancedPart}
              />
            </div>
            {showAdvanced && <div className='advanced_input_container'>
              <div className='advanced_input_label'>
                Key
              </div>
              <div className='advanced_input_wrapper'>
                <div className='advanced_input'>
                  <PlainInput
                    value={advanceKey}
                    onChange={this.onKeyChange}
                  />
                </div>
                <div className='tip_button_wrapper'>
                  <ImageButton
                    onClick={() => ({})}
                    render={props => <div className='plain-card_wrapper'>
                      {props.isOpen && <PlainCard
                        link='#'
                        text="The project key is used as the prefix of your project's issue keys (e.g. 'TEST-100'). Choose one that is descriptive and easy to type."
                        title='Learn more'
                      />}
                    </div>}
                  >
                    <ExclamationPointSvg/>
                  </ImageButton>
                </div>
              </div>
            </div>}
            <div className='create-button_wrapper'>
              <PlainButton
                disabled={!projectName}
                title='Create'
                onClick={this.createProject}
              />
            </div>
          </div>
        </div>
      </StyledCreateProject>
    )
  }
}

CreateProject.propTypes = {
  type: PropTypes.string
};

export default CreateProject;