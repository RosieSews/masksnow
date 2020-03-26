import React from 'react'
import PropTypes from 'prop-types'
import { AvailableSuppliesTemplate } from '../../templates/available-supplies'

const AvailableSuppliesPreview = ({ entry, widgetFor }) => (
  <AvailableSuppliesTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AvailableSuppliesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AvailableSuppliesPreview
