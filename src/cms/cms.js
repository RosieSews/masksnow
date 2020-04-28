import CMS from 'netlify-cms-app';

import PatternsPreview from './preview-templates/PatternsPreview';
import GroupsDirectoryPreview from './preview-templates/GroupsDirectoryPreview';
import NewsPostPreview from './preview-templates/NewsPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/InfoPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('request-supplies', PagePreview);
CMS.registerPreviewTemplate('patterns', PatternsPreview);
CMS.registerPreviewTemplate('3-layer-pattern', PatternsPreview);
CMS.registerPreviewTemplate('pocket-pattern', PatternsPreview);
CMS.registerPreviewTemplate('groups-directory', GroupsDirectoryPreview);
CMS.registerPreviewTemplate('volunteer', PagePreview);
CMS.registerPreviewTemplate('news', NewsPostPreview);
CMS.registerPreviewTemplate('faq', PagePreview);
CMS.registerPreviewTemplate('contact', PagePreview);
CMS.registerPreviewTemplate('about-us', PagePreview);
CMS.registerPreviewTemplate('psa', PagePreview);
CMS.registerPreviewTemplate('donate', PagePreview);
