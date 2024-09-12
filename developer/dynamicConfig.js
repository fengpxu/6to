/**
 * Configure dynamic config for development
 */
module.exports = {
  remote: {
    url: 'https://6.to/app/remote_config'
  },
  local: {
    type: 'local',
    version: 'default:v1',
    oauth: {
      enable: false,
      providers: [
        'Github',
        'Twitter'
      ]
    },
    account: {
      phone_number: false
    },
    library: {
      show_explore: false
    },
    update: {
      enable: false
    }
  }
}
