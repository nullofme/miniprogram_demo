//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [11111,,55555555,]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
