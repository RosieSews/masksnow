import React from 'react'
import PropTypes from 'prop-types'
import { PatternsTemplate } from '../../templates/patterns'

const PatternsPreview = ({ entry, widgetFor }) => (
  <PatternsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PatternsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PatternsPreview
