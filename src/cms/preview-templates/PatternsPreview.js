import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../../templates/PageTemplate';

const PatternsPreview = ({ entry, widgetFor }) => (
  <PageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

PatternsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PatternsPreview;
