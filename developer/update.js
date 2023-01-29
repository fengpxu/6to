/**
 * Configure update repo, s3 bucket, etc.
 */
module.exports = {
  /**
   * Your github config, used for feedback, upgrade, etc
   */
  github: {
    username: 'fengpxu',
    repo: '6to-prvt',
    // if you are using a different branch name, change it here
    branch: 'main',
    /**
     * Internal build repo
     */
    internalRepo: '6to-prvt'
  },
  /**
   * Amazon S3 bucket for your app
   */
  bucketUrl: 'https://s3.amazonaws.com/internal.6.to',
  s3DownloadUrl: 'https://s3.amazonaws.com/internal.6.to/releases/'
}
