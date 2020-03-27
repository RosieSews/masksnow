import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../../templates/PageTemplate';

const RequestSuppliesPreview = ({ entry, widgetFor }) => (
  <PageTemplate
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
