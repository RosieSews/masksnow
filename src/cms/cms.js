import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import RequestSuppliesPreview from './preview-templates/RequestSuppliesPreview';
import PatternsPreview from './preview-templates/PatternsPreview';
import GroupsDirectoryPreview from './preview-templates/GroupsDirectoryPreview';
import VolunteerPreview from './preview-templates/VolunteerPreview';
import NewsPostPreview from './preview-templates/NewsPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/InfoPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('request-supplies', RequestSuppliesPreview);
CMS.registerPreviewTemplate('patterns', PatternsPreview);
CMS.registerPreviewTemplate('groups-directory', GroupsDirectoryPreview);
CMS.registerPreviewTemplate('volunteer', VolunteerPreview);
CMS.registerPreviewTemplate('news', NewsPostPreview);
CMS.registerPreviewTemplate('faq', PagePreview);
CMS.registerPreviewTemplate('contact', PagePreview);
CMS.registerPreviewTemplate('about-us', PagePreview);
CMS.registerPreviewTemplate('psa', PagePreview);
