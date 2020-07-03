//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

    logs: [6554535,,5566555,],
    logs: [65765,,556654855,]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
