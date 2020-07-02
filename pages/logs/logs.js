//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [235,456789]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
