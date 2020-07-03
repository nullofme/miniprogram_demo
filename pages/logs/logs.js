//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [876,,5566555,],
    logs: [65765,,5566555,]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
