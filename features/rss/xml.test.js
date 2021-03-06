// eslint-disable-next-line no-unused-vars
import Consumer from 'fusion:consumer'
import { FbiaRss } from './xml'

const articles = {
  content_elements: [
    {
      display_date: '2020-04-07T15:02:08.918Z',
      last_updated_date: '2020-04-08T10:34:41.432Z',
      website_url: '/food/2020/04/07/tips-for-safe-hand-washing',
      promo_items: {
        basic: {
          title: 'Hand Washing',
          url:
            'https://arc-anglerfish-arc2-prod-demo.s3.amazonaws.com/public/JTWX7EUOLJE4FCHYGN2COQAERY.png',
          caption: 'Hand washing can be fun if you make it a song',
          credits: { by: [{ name: 'Harold Hands' }] },
        },
      },
      credits: {
        by: [
          { name: 'John Smith', _id: 'john-smith' },
          { name: 'Jane Doe', _id: 'jane-doe' },
        ],
      },
      headlines: { basic: 'Tips for Safe Hand washing' },
      description: { basic: 'Tips to keep you wash for 20 seconds' },
      subheadlines: { basic: 'This is from the subheadlines' },
      content_elements: [
        { type: 'text', content: 'try singing the happy birthday song' },
        { type: 'text', content: 'be sure to wash your thumbs' },
      ],
      taxonomy: {
        primary_section: { name: 'coronvirus' },
      },
    },
  ],
}

it('returns RSS template with default values', () => {
  const rss = FbiaRss({
    arcSite: 'demo',
    globalContent: {
      ...articles,
    },
    customFields: {
      channelTitle: '',
      channelDescription: '',
      channelPath: '/arc/outboundfeeds/rss/',
      channelCopyright: '',
      channelTTL: '1',
      channelUpdatePeriod: 'hourly',
      channelUpdateFrequency: '1',
      channelCategory: '',
      channelLogo: '',
      itemTitle: 'headlines.basic',
      itemDescription: 'description.basic',
      pubDate: 'display_date',
      itemCredits: 'credits.by[].name',
      itemCategory: '',
      includePromo: true,

      imageTitle: 'title',
      imageCaption: 'caption',
      imageCredits: 'credits.by[].name',
      includeContent: 'all',
      articleStyle: '',
      likesAndComments: '',
      adPlacement: '',
      adDensity: '',
      placementSection: '',
      adScripts: '',
    },
  })
  expect(rss).toMatchSnapshot({
    rss: {
      channel: {
        lastBuildDate: expect.stringMatching(
          /\w+, \d+ \w+ \d{4} \d{2}:\d{2}:\d{2} \+0000/,
        ),
      },
    },
  })
})
