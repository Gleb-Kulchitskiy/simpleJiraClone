import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PlainButton from '../../../generics/buttons/PlainButton';
import FieldsSettings from './FieldsSettings';

import StyledCreateNewIssue, {Header} from './StyledCreateNewIssue';

class CreateNewIssue extends Component {

  constructor(props) {
    super(props)

  }

  onImportIssues = () => {
    //todo
  };

  toggleFieldsSettings = () => {

  };

  render() {

    return (
      <StyledCreateNewIssue>
        <div className='header'>
          <Header
            title='Import issues. Create Issue.'
          >
            Create Issue
          </Header>
          <div className='buttons_wrapper'>
            <PlainButton
              description='Import issues. Create Issue.'
              title='Import issues'
              onClick={this.onImportIssues}
            />
            <PlainButton
              withArrow={true}
              title={'Configure fields'}
              onClick={this.toggleFieldsSettings}
              render={() => <FieldsSettings/>}
            />
          </div>
        </div>
      </StyledCreateNewIssue>
    )
  }
}

CreateNewIssue.propTypes = {};

export default CreateNewIssue;