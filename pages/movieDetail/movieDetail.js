var util = require('../../utils/util.js')
Page({
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    movie: {},
    directors: [],
    casts: []
  },
  onLoad: function (e) {
    var page = this;
    var key = util.getDataKey();
    wx.request({
      url: util.getMovieDetail(e.id),
      success: function (res) {
        console.log(res);
        var movie = res.data;
        movie.poster_path = util.getImage(movie.poster_path);
        page.setData({ movie: movie });
        page.setData({ directors: movie.production_companies.map(function (item) {
          item.logo_path = util.getImage(item.logo_path);
          return item;
        }) });
        page.setData({ casts: movie.production_companies });
        wx.setNavigationBarTitle({
          title: movie.title
        })
      }
    });
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        page.setData({ winWidth: res.windowWidth });
        page.setData({ winHeight: res.windowHeight });
      }
    });
  },
  loadImage:function (path){
    return util.getImage(path);
  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  }
})