Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createContext()
    //设置描边颜色
    context.setStrokeStyle("#00ff00")
    //设置线条宽度
    context.setLineWidth(5)
    //创建一个矩形坐标(0,0),长宽都是200
    context.rect(0,0, 200, 200)
    //画出当前路径的边框
    context.stroke()

    //设置描边颜色
    context.setStrokeStyle("#ff0000")
    //设置线条宽度
    context.setLineWidth(2)
    //把路径移动到画布中的指定点(160,100)，不创建线条,用 stroke 方法来画线条
    context.moveTo(160, 100)
    //创建一条弧线
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    //把路径移动到画布中的指定点(140,100)，不创建线条,用 stroke 方法来画线条
    context.moveTo(140, 100)
    //创建一条弧线
    context.arc(100, 100, 40, 0, Math.PI, false)
    //把路径移动到画布中的指定点(85,80)，不创建线条,用 stroke 方法来画线条
    context.moveTo(85, 80)
    //创建一条弧线
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    //把路径移动到画布中的指定点(125,80)，不创建线条,用 stroke 方法来画线条
    context.moveTo(125, 80)
    //创建一条弧线
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    //画出当前路径的边框
    context.stroke()

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })
  }
})
