import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'dc9d93a76d3d4019b58a4d9471d3adab',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Blog powered by complianceAlliance.com',
  domain: 'https://battle-system-a34.notion.site/complianceAlliance-com-dc9d93a76d3d4019b58a4d9471d3adab',
  author: 'Thomas Yang',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'thomas_yang_1984',
  github: 'thomas_yang_1984',
  linkedin: 'thomas_yang_1984',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About',
       pageId: 'ed6db428f544425f876598a2fb27e198'
     },
     {
       title: 'Contact',
       pageId: 'c850357315e94599a7aa9251a71b5453'
     }
   ]
})
