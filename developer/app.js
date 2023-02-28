/**
 * Configure app basic info.
 */

/** App name is used everywhere. */
const APP = 'sixto'

const app = {
  /**
   * App name.
   * Recommend using only a-z and A-Z without spaces
   */
  name: APP,
  /**
   * Display name
   * Used for App title
   * `appx` target (Microsoft Store)
   */
  displayName: '6to TV and Movie Downloader',
  /**
   * file name
   * A brief display name. Used for Installation package file name
   * when display name is too long
   */
  fileName: '6to',
  /**
   * Application ID for android/ios app. The format should be something like
   * `org.author.appname`
   */
  appId: 'com.zeeis.alphabiz',
  /**
   * The bin name for snapcraft, which can be used to launch your app
   * via terminal. Default: `alphabiz`
   */
  snapName: '6to-app',
  /**
   * Author name
   */
  author: '6to Team <ZJY>',
  /**
   * Developer name for windows.
   * Note that this key should not contain special characters(like `<>` above)
   */
  developer: 'Crypto',
  /**
   * The app identifier you 've registered for MAS(Mac App Store) in https://developer.apple.com/account.
   * It is recommended to use `com.YOUR_COMPANY.YOUR_APP_NAME`, with no special characters(spaces, etc).
   * Different identifiers will be recognized as different apps.
   */
  appIdentifier: 'org.zeeis.alphabiz',
  description: '6to Blockchain Cryptocurrency Application',
  /**
   * Used to unify locally generated installation packages and the Microsoft Store
   */
  appxPackageIdentityName: '34684Crypto.6to-MovieDownloaderandMediaPlayer',
  /**
   * The default .pfx file uses publisher: 'CN=zeeis'.
   * If you want to use .appx file after modifying publisher,
   * please manually modify app.pfx file
   */
  publisher: 'CN=5FC4FB0D-0696-440F-8B37-B6180DAA67CF',

  /**
   * Website for your app. Used in linux debian package.
   */
  homepage: 'https://6.to',

  webEditionUrl: 'https://web-6-to.pages.dev',
  /**
   * Upgrade code for windows.
   * If two app have a same code, windows will remove old one when installing.
   * You can create your own code by running command `npx uuid v4`.
   */
  upgradeCode: '2d577e6b-a8fb-449d-b230-fc23e1f083b2',
  /**
   * App binding protocol scheme.
   * By default the app will register `alphabiz://` as its url protocol
   */
  protocol: 'sixto',
  /**
   * Short url protocol.
   * By default using `ab://`
   */
  shortProtocol: 'st',
  /**
   * An url to a version.json file, which allows you to add min-version for your app.
   * See this file for more detail.
   */
  versionsUrl: 'https://raw.githubusercontent.com/tanshuai/alphabiz/main/versions.json',
  /**
   * Twitter account for feedback
   */
  twitterAccount: '@sixdotto',
  /**
   * Configure who can register accounts in your app
   */
  register: {
    /**
     * @type { 'none' | 'blacklist' | 'whitelist' }
     * - `none`: any one can register
     * - `blacklist`: countries in list will be disabled
     * - `whitelist`: only countries in list will be enabled
     */
    mode: 'blacklist',
    /**
     * @type { string[] }
     * Country code list. Must be geoip ISO 3166-1-alpha-2 code
     * @see http://www.geonames.org/countries/
     */
    // list: ['US', 'CN']
    // list: ['US', 'GB', 'DE', 'JP', 'CA', 'IT']
    list: ['GB', 'DE', 'CA', 'IT']
  },
  update: require('./update'),
  takedown: require('./take-down'),
  /**
   * App Theme Config
   */
  theme: {
    color: {
      primary: '#c43e1c',
      secondary: '#219bd9',
      accent: '#c43e1c'
      // primary: '#a2c1f3',
      // secondary: '#97afc4',
      // accent: '#5800dc'
    },
    /**
     * CSS for app icon in left-top corner as background
     */
    cornerLogoStyle: {
      /**
       * Uncomment following lines to customize your logo
       */
      // filter: 'brightness(1.2) saturate(1.2)',
      // opacity: '0.3',
      left: '-32px',
      top: '-152px',
      height: '245px'
    }
  },
  dynamicConfig: require('./dynamicConfig'),
  /**
   * Microsoft Store Product ID
   */
  microsoftStoreProductId: '9P126PHPZ0JH'
}

console.log('INIT APP CONFIG')
global._app_config_ = app
/**
 * If `alphabiz-libdb` finds LIBDB_NAME in global, it will use the name as
 * internal category, so different builds will have seperated libraries.
 * If you use same appName for different builds, you can add a tail to the
 * LIBDB_NAME to seperate libs.
 */
global.LIBDB_NAME = app.name // + '-' + SUB_VERSION
module.exports = app
/**
 * Check short protocol
 */
// if (app.name.toLowerCase() === app.shortProtocol) {
//   throw new Error(`Cannot set short protocol as same as appName ${app.name}`)
// }
require('./validateAppConfig')(app)
