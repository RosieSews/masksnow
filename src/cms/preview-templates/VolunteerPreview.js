import React from 'react'
import PropTypes from 'prop-types'
import { VolunteerTemplate } from '../../templates/volunteer'

const VolunteerPreview = ({ entry, widgetFor }) => (
  <VolunteerTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VolunteerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VolunteerPreview
