Page({
  data: {
    placeholder: '开始输入...',
    isReadOnly: false
  },
  onEditorReady: function () {//初始化编辑器
    var that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context;
    }).exec()
  },
  onContentChange: function (e) {//监控编辑器内容变化
    console.log(e.detail);
  },
  clickBtn: function (e) {//操作
    //清空编辑器内容
    this.editorCtx.clear();
    //插入文本内容
    this.editorCtx.insertText({
      text: "插入内容"
    });
  }
})
