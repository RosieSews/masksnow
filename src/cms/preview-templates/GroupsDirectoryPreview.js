import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../../templates/PageTemplate';

const GroupsDirectoryPreview = ({ entry, widgetFor }) => (
  <PageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

GroupsDirectoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GroupsDirectoryPreview;
