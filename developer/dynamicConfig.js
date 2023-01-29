/**
 * Configure dynamic config for development
 */
module.exports = {
  remote: {
    url: 'https://6.to/app/remote_config.json'
  },
  local: {
    id: 'local_config_v1',
    oauth: {
      enable: false,
      providers: [
        'Github',
        'Twitter'
      ]
    },
    update: {
      enable: false
    }
  }
}
