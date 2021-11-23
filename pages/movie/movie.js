var util = require('../../utils/util.js')
Page({
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "/images/haibao/1.jpg",
      "/images/haibao/2.jpg",
      "/images/haibao/3.jpg",
      "/images/haibao/4.jpg"
    ]
  },
  onLoad: function (e) {
    var page = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        page.setData({ winWidth: res.windowWidth });
        page.setData({ winHeight: res.windowHeight });
      }
    });
    this.loadMovies();
  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  },
  loadMovies: function () {
    var page = this;
    var key = util.getDataKey();
    wx.request({
      url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + key,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res);
        var subjects = res.data.results.map(function (item) {
            item.poster_path = util.getImage(item.poster_path);
            return item;
        });
        var size = 20;//电影总数量
        var len = parseInt(size / 3);//每行放置3个电影，计算出需要多少行

        console.log(len);
        console.log(subjects);
        page.setData({ movies: subjects });
        page.setData({ winHeight: (len) * 280 });//动态的设置电影内容的高度

      }
    })
  },
  loadImage:function (path){
    return util.getImage(path);
  },
  loadDetail: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id
    })
  }
})