# CSS3属性
```text
1.border-radius: //圆角

2.box-shadow: //阴影

3.border-imgae: //边框图片

4.background-size: //设置背景大小

5.backgroudn-origin: content-box/border-box/padding-box; //背景图片定位区域

6.background-image: url('./demo.png'),url('./demo.png'); //css3支持多重背景图片

7.text-shadow: right bottom shadow; //文字阴影

8.word-wrap: normal(default) | break-word; //允许长单词换到下一行

9.text-overflow: clip | ellipsis | string; //文本超出包含元素处理方式：切断 | 用省略号代替 | 用字符串代替

10.@font-face{
    font-family: dutao;
    src: url("dutao_font.ttf"),
         url("dutao_font.eto") /'ie9+'/
} //自定义字体,ie9+只支持eto格式的字体
body{
    font-family: dutao;
}

11.(2d)transform: translate(x ,y); //元素从当前位置移动
  -ms-transform: /*ie9*/
  -webkit-transform: /*Safari and Chrome*/
  -o-transform: /*Opera*/
  -moz-transform: /*Firefox*/
  transform: rotate(Xdeg); //元素旋转X度
  transform: scale(x, y); //元素横、纵分别放大多少倍
  transform: skew(Xdeg, Ydeg); //元素绕x轴、y轴翻转
  transform: matrix(); //把所有的2d效果叠加，参数为六个值得矩阵

12.(3d)transform: rotateX(Xdeg); //元素围绕x轴给定的度数旋转
  -webkit-transform: /*Safari and Chrome*/
  -moz-transform: /*Firefox*/
  transform: rotateY(Ydeg); //袁术围绕y轴给定的度数旋转

13.(2d)transform-origin: x% y%; 
   (3d)transform-origin: x% y% z%; //设置旋转基点位置
   -ms-
   -webkit-
   -o-
   -moz-

14.transform-style: preserve; //被翻转元素的子元素保留翻转（必须与transform一起使用）
   -webkit-

15.transition: attr time, attr time, attr time; //属性(attr)过渡时间(time)
   -moz-
   -o-
   -webkit-
   (transition-property和transition-duration的合集)

16.transition-timing-function: linera | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n, n, n, n); //过度效果速度曲线：匀速 | 慢开-加速-慢出 | 慢进 | 慢出 | 慢近-慢出 | 自定义值
  -moz-
  -o-
  -webkit-  

16.transition-delay: 0(default) | time; //运动开始时间(time)
  -moz-
  -o-
  -webkit-

17.@keyframes myDemo{ 
    from | 0% {},
    to | 100% {}
  } //@keyframes创建动画，然后绑定到某个选择器中
  -moz-
  -o-
  -webkit-
  div{
      animation: myDemo time;
  }

18.animation: name duration function delays count direction; //动画简写属性
   animation-name: myDemo | none(default); //动画名字   
   animation-duration: time | 0(default); //动画时间  
   animation-timing-function: linera | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n, n, n, n); //匀速 | 慢近-快-慢出 | 慢进 | 慢出 | 慢进-慢出 | 自定义  
   animation-delays: time | 0(default); //动画time后开始
   animation-iteration-count: 1(default) | count | infinite; //动画执行多少次: 一次默认值 | count次 | 无数次
   animation-direction: normal(default) | alternate; //下一个周期是否反向： 不反向（默认） | 反向
   -moz-
   -o-
   -webkit-

19.animation-play-state: running(default) | paused; //动画是否正在播放： 播放 | 暂停
   -webkit-

20.animation-fill-mode: none(default) | forwards | backwards | both; //规定动画在播放之前和播放之后，其动画效果是否可见：不改变默认效果 | 动画完成之后保持最后一个属性 | 在动画显示之前，应用开始属性值 | 向前和向后填充模式都被应用

21.column-count: count; //规定元素被分隔的列数：count
  column-gap: gap; //规定间隔之间的距离：gap
  column-rule: width style color; //定义间隔之间的间隔样式：宽度 样式 颜色
      column-rule-width: width;
      column-rule-style: style;
      column-rule-color: color;
  column-span: 1(default) | all; //在分列的下的子元素跨列数： 1(默认) | all(所有列)
  column-width: widht; //规定列的宽度：width(根据宽度自动分列)
  columns: width count; //column-count和column-width的简写
  -moz-
  -webkit-

22.resize: both; //规定元素可以由用户调整大小（兼容性较差）

23.box-sizing: border-box; //确切元素在某一个区域内
   -moz-
   -webkit-

24.outline-offset: range; //定义外围边框位置：距离

25
```