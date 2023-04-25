import locale9ec66352 from '../..\\lang\\en.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","dateTimeFormats":{"en":{"long":{"year":"numeric","month":"numeric","day":"numeric","hour":"numeric","minute":"numeric"}},"zh":{"long":{"year":"numeric","month":"numeric","day":"numeric","hour":"numeric","minute":"numeric"}}}},
  vueI18nLoader: true,
  locales: [{"code":"en","iso":"en-US","flag":"us","name":"English","file":"en.json"},{"code":"zh","iso":"zh-CN","flag":"zh","name":"中文","file":"zh.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "D:\\coding\\front-end\\GUMI\\shopflexio\\packages\\client\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","flag":"us","name":"English","file":"en.json"},{"code":"zh","iso":"zh-CN","flag":"zh","name":"中文","file":"zh.json"}],
  localeCodes: ["en","zh"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => Promise.resolve(locale9ec66352),
  'zh.json': () => import('../..\\lang\\zh.json' /* webpackChunkName: "lang-zh.json" */),
}
