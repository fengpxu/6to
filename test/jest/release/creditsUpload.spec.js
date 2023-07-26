/* eslint-disable jest/no-disabled-tests */
const wdio = require('webdriverio')
const path = require('path')
const fs = require('fs')

const { HomePage } = require('./Pages/HomePage')
const { AccountPage } = require('./Pages/AccountPage')
const { CreditsPage } = require('./Pages/CreditsPage')
const { DevelopmentPage } = require('./Pages/DevelopmentPage')
const obj = require('./TestEnvironment')
const { sleep } = require('../../utils/getCode')
const { calculation } = require('../../utils/calculation')
const appConfig = require('../../../developer/app')

let client, homePage, accountPage, creditsPage, developmentPage
const uploadUser = (appConfig.name === 'Alphabiz' ? 'down2' : 'down4') +  process.env.TEST_EMAIL_DOMAIN
const outputFile = process.env.APP_TYPE === 'exe' ? '/exe' : process.env.APP_TYPE === 'msi' ? '/msi' : '/7z'
const outputPath = path.resolve(__dirname, '../../output/release' + outputFile)
let isSuccess = false

jest.setTimeout(60000 * 30)
describe('upload', () => {
  beforeAll(async () => {
    client = await wdio.remote(obj.opts)
    homePage = new HomePage(client)
    accountPage = new AccountPage(client)
    creditsPage = new CreditsPage(client)
    developmentPage = new DevelopmentPage(client)
  }, 120000)
  afterAll(async () => {
    client && await client.deleteSession()
  })
  beforeEach(async () => {
    isSuccess = false
  })
  afterEach(async () => {
    // console.log('isSuccess', expect.getState().currentTestName, isSuccess)
    if (!isSuccess) {
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true })
      }
      client && await client.saveScreenshot(outputPath + `/${expect.getState().currentTestName}.png`)
    }
  })
  it.skip('test1', async () => {
    expect(1).toBe(1)
  })
  it('upload seeding', async () => {
    const uploadFilePath = path.resolve(__dirname, '../../cypress/fixtures/samples/ChinaCup.1080p.H264.AAC.mp4')
    // const torrentName = 'GoneNutty.avi'
    const torrentName = 'ChinaCup.1080p.H264.AAC.mp4'
    // 判断是否已经登录
    await sleep(10000)
    await accountPage.ensureSignIn(uploadUser, process.env.TEST_PASSWORD, { isWaitAlert: true })

    // 查看初始积分
    await homePage.jumpPage('creditsLink')
    const initialCredit = await creditsPage.checkCredits()
    console.log('initialCredit:' + initialCredit)
    // 判断是否已经上传
    await homePage.jumpPage('uploadingStatusTab')
    await sleep(3000)
    await homePage.setCardMode()
    if (await homePage.getTask(torrentName) === null) {
      await homePage.jumpPage('downloadedStatusTab')
      // 上传bt种子
      if (await homePage.getTask(torrentName) === null) {
        await homePage.jumpPage('uploadingStatusTab')
        await homePage.uploadTorrent(uploadFilePath)
      } else {
        await client.$('//Text[@Name="' + torrentName + '"]/following-sibling::Button[@Name="SEED"]').click()
      }
    }

    const taskStatus = await homePage.getTaskStatus(torrentName)
    expect(taskStatus).toBe('Status: Uploading')

    await homePage.jumpPage('creditsLink')
    let changedCredit
    while (1) {
      changedCredit = await creditsPage.checkCredits()
      if (calculation('reduce', changedCredit, initialCredit) >= 0.001) break
      await sleep(5000)
    }
    console.log('credits increase:' + changedCredit)
    await sleep(10000)
    console.log('wait download complete')
    isSuccess = true
  })
})
