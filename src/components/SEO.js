import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../config';

const SEO = props => {
	const { postNode, postPath, article, buildTime } = props;

	let title = config.siteTitleAlt;
	let description = config.siteDescription;
	let keywords =
		"Donate medical masks, covid19, homemade masks, homemade surgical mask, surgical mask, reuseable masks";

	const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
	const homeURL = `${config.siteUrl}${realPrefix}`;
	const URL = `${homeURL}${postPath || ""}`;
	const image = `${homeURL}${config.siteBanner}`;

	if (article) {
		const postMeta = postNode.frontmatter;
		title = `${postMeta.title} | ${config.siteTitle}`;
		if (postMeta.hasOwnProperty("description")) {
			description = postMeta.description;
		} else if (postNode.hasOwnProperty("excerpt")) {
			description = postNode.excerpt;
		}

		if (postMeta.hasOwnProperty("keywords")) {
			keywords = postNode.frontmatter.keywords.join();
		}
	}

	// schema.org in JSONLD format
	// https://developers.google.com/search/docs/guides/intro-structured-data
	// You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

	const schemaOrgWebPage = {
		"@context": "http://schema.org",
		"@type": "WebPage",
		url: URL,
		headline: config.siteHeadline,
		inLanguage: config.siteLanguage,
		mainEntityOfPage: URL,
		description: config.siteDescription,
		name: config.siteTitle,
		author: {
			"@type": "Person",
			name: config.author
		},
		copyrightHolder: {
			"@type": "Person",
			name: config.author
		},
		copyrightYear: "2020",
		creator: {
			"@type": "Person",
			name: config.author
		},
		publisher: {
			"@type": "Person",
			name: config.author
		},
		datePublished: "2019-01-07T10:30:00+01:00",
		dateModified: buildTime,
		image: {
			"@type": "ImageObject",
			url: image
		}
	};

	// Initial breadcrumb list

	const itemListElement = [
		{
			"@type": "ListItem",
			item: {
				"@id": homeURL,
				name: "Home"
			},
			position: 1
		},
		{
			"@type": "ListItem",
			item: {
				"@id": `${homeURL}/patterns`,
				name: "Mask Patterns"
			},
			position: 2
		},
		{
			"@type": "ListItem",
			item: {
				"@id": `${homeURL}/request-supplies`,
				name: "Request for Assistance"
			},
			position: 2
		},
		{
			"@type": "ListItem",
			item: {
				"@id": `${homeURL}/about-us`,
				name: "About Us"
			},
			position: 2
		},
		{
			"@type": "ListItem",
			item: {
				"@id": `${homeURL}/volunteer`,
				name: "Join The Cause"
			},
			position: 2
		}
	];

	let schemaArticle = null;

	if (article) {
		schemaArticle = {
			"@context": "http://schema.org",
			"@type": "Article",
			author: {
				"@type": "Person",
				name: config.author
			},
			copyrightHolder: {
				"@type": "Person",
				name: config.author
			},
			copyrightYear:
				postNode.parent && postNode.parent.hasOwnProperty("birthtime")
					? postNode.parent.birthtime
					: 2020,
			creator: {
				"@type": "Person",
				name: config.author
			},
			publisher: {
				"@type": "Organization",
				name: config.author,
				logo: {
					"@type": "ImageObject",
					url: `${homeURL}${config.siteLogo}`
				}
			},
			//datePublished: postNode.parent.birthtime,
			//dateModified: postNode.parent.mtime,
			description,
			headline: title,
			inLanguage: "en",
			url: URL,
			name: title,
			image: {
				"@type": "ImageObject",
				url: image
			},
			mainEntityOfPage: URL
		};
		// Push current blogpost into breadcrumb list
		itemListElement.push({
			"@type": "ListItem",
			item: {
				"@id": URL,
				name: title
			},
			position: 3
		});
	}

	const breadcrumb = {
		"@context": "http://schema.org",
		"@type": "BreadcrumbList",
		description: "Breadcrumbs list",
		name: "Breadcrumbs",
		itemListElement
	};

	return (
		<Helmet>
			<html lang={config.siteLanguage} />
			<title>{title}</title>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<meta name="gatsby-starter" content="Gatsby Starter Minimal Blog" />
			<meta property="og:locale" content={config.ogLanguage} />
			<meta
				property="og:site_name"
				content={config.ogSiteName ? config.ogSiteName : ""}
			/>
			<meta property="og:url" content={URL} />
			<meta property="og:type" content={article ? "article" : "website"} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:height" content={"600"} />
			<meta property="og:image:width" content={"600"} />
			<meta property="og:image:alt" content={description} />
			{config.siteFBAppID && (
				<meta property="fb:app_id" content={config.siteFBAppID} />
			)}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:creator"
				content={config.userTwitter ? config.userTwitter : ""}
			/>
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={config.siteUrl} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:image:alt" content={description} />
			{/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
			{!article && (
				<script type="application/ld+json">
					{JSON.stringify(schemaOrgWebPage)}
				</script>
			)}
			{article && (
				<script type="application/ld+json">
					{JSON.stringify(schemaArticle)}
				</script>
			)}
			{/* <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
<<<<<<< HEAD
	postNode: PropTypes.object,
	postPath: PropTypes.string,
	article: PropTypes.bool,
	buildTime: PropTypes.string
};

SEO.defaultProps = {
	postNode: null,
	postPath: null,
	article: false,
	buildTime: null
=======
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  article: PropTypes.bool,
  buildTime: PropTypes.string,
};

SEO.defaultProps = {
  postNode: null,
  postPath: null,
  article: false,
  buildTime: null,
>>>>>>> origin
};
