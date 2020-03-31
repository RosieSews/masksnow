import React from 'react';
import PropTypes from 'prop-types';
import { RequestSuppliesTemplate } from '../../templates/request-supplies';

const RequestSuppliesPreview = ({ entry, widgetFor }) => (
  <RequestSuppliesTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

RequestSuppliesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RequestSuppliesPreview;
