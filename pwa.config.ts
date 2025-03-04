import type { Config } from './types';

export default {
  id: '/',
  name: 'مجلة شمول',
  shortName: 'شمول',
  description: 'مجلة شمول الالكترونية تقدم محتوى متنوع من مواضيع رائجة في ساحة الويب',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'مجلة شمول الالكترونية',
      shortName: 'شمول',
      description: 'مجلة شمول الالكترونية تقدم محتوى متنوع من مواضيع رائجة في ساحة الويب',
      url: '/?utm_source=homescreen',
    },
    {
      name: 'حول المجلة',
      shortName: 'من نحن',
      description: 'مجلة شمول الالكترونية تقدم محتوى متنوع من مواضيع رائجة في ساحة الويب',
      url: '/p/about-us.html?utm_source=homescreen',
    },
    {
      name: 'سياسة الخصوصية',
      shortName: 'الخصوصية',
      description: 'مجلة شمول الالكترونية تقدم محتوى متنوع من مواضيع رائجة في ساحة الويب',
      url: '/p/privacy.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '87458417-f3a8-41dd-ac8b-f7cd0662cf87',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.shomole.com',
} satisfies Config;
