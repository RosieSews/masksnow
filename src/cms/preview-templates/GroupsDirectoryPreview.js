import React from 'react'
import PropTypes from 'prop-types'
import { GroupsDirectoryTemplate } from '../../templates/groups-directory'

const GroupsDirectoryPreview = ({ entry, widgetFor }) => (
  <GroupsDirectoryTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GroupsDirectoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GroupsDirectoryPreview
