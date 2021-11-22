Page({
  data: {
    date: '2020-09-01'
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})
