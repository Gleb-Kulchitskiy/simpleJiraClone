import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlainCheckbox from '../../../../generics/checkboxes/PlainCheckbox';

import StyledFieldsSettings from './StyledFieldsSettings';

import CREATE_ISSUE_ACTIONS from '../../../../../redux/createIssue/actions';

const fields = [
  {
    uniqueKey: 'affectVersions',
    label: 'Affect Version'
  },
  {
    uniqueKey: 'assignee',
    label: 'Assignee'
  },
  {
    uniqueKey: 'attachment',
    label: 'Attachment'
  },
  {
    uniqueKey: 'components',
    label: 'Components'
  },
  {
    uniqueKey: 'description',
    label: 'Description'
  },
  {
    uniqueKey: 'environment',
    label: 'Environment'
  },
  {
    uniqueKey: 'epicLinc',
    label: 'Epic Link'
  },
  {
    uniqueKey: 'fixVersion',
    label: 'Fix Version'
  },
  {
    uniqueKey: 'labels',
    label: 'Labels'
  },
  {
    uniqueKey: 'linkedIssues',
    label: "Linked Issues"
  },
  {
    uniqueKey: 'priority',
    label: 'Priority'
  },
  {
    uniqueKey: 'summary',
    label: 'Summary'
  },
];

function FieldsSettings(props) {
  const {activeSettings, activeFields, toggleField} = props;

  function dummyOnClick(e) {
    e.stopPropagation();
  }

  function toggleSettings() {
    const {toggleSettings} = props;
    toggleSettings()
  }

  return (
    <StyledFieldsSettings
      onClick={dummyOnClick}
      activeSettings={activeSettings}
    >
      <div className='fields_header'>
        <div className='fields_toggle_wrapper'>
          <span className='fields_title'>Show Fields:</span>
          <span className='fields_toggle_all' onClick={activeSettings ? toggleSettings : () => ({})}>All</span>
          <span className='fields_custom' onClick={!activeSettings ? toggleSettings : () => ({})}>Custom</span>
        </div>
        <div className='fields_link_wrapper'>
          <a>Where is my field?</a>
        </div>
      </div>
      <div className='fields_content'>
        {fields.map(field => (
          <PlainCheckbox
            key={field.uniqueKey}
            label={field.label}
            uniqueKey={field.uniqueKey}
            checked={activeFields.indexOf(field.uniqueKey) !== -1}
            onClick={(obj) => {
              toggleField({field: obj.uniqueKey})
            }}
          />
        ))
        }
      </div>
    </StyledFieldsSettings>
  )
}

FieldsSettings.propTypes = {};

export default connect(({createIssue}) => ({
  activeFields: createIssue.activeFields,
  activeSettings: createIssue.activeSettings
}), {
  toggleSettings: CREATE_ISSUE_ACTIONS.toggleSettings,
  toggleField: CREATE_ISSUE_ACTIONS.toggleField
})(FieldsSettings);