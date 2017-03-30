##前言
> 作者：我原是是猪

> 邮箱：1173127007@qq.com **欢迎补充，指错，讨论**

# FLEX 弹性布局

任何一个容器都可以指定flex布局
```text
.box {
    display : -webkit-flex ; //webkit内核
    display : flex ;
}
.box {
    display : -webkit-inline-flex ; //webkit内核
    display : inline-flex ; //行内元素
}
```

* 使用flex布局后，子元素的float,clear和vertical-align属性将失效 ；

## 兼容性

<a href="www.caniuse.com/#search=flex">浏览器兼容性(未亲测)</a>
<img src = "./imgs/support.png">

## 一、基本概念

* 采用Flex布局的元素，称为Flex容器；

* 容器**默认**存在两个值：水平的主轴（main axis）和垂直的交叉轴（cross axis） ;

* 主轴开始的位置( 与边框的交叉点 )，叫做main start; 主轴的结束的位置，叫做main end ;

* 交叉轴开始的位置叫cross start; 交叉轴结束的位置叫cross end ;

* 单个项目占据的主轴空间叫main size,占据交叉轴的空间叫cross size(*仅仅只影响子元素，而不包括子元素的后代元素*) ;

<img src = "./imgs/flex.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/flex.html" target="_blank">实例路径（建议down下整个flex目录）</a>

## 二、容器属性

###### 1.flex-direction 属性决定主轴的方向（即项目的排列方向）；

```text
.box { 
    flex-direction : row || row-reverse || column || column-reverse ;
}
```
* row : 水平主轴方向，起点在左端 ；
* row-reverse : 水平主轴方向，起点在右端 ；
* column : 竖直交叉轴方向，起点在上沿 ；
* column-reverse : 竖直交叉轴方向，起点在下沿 ；
（**主轴的方向是可以改变的**）

<img src="./imgs/flex-direction.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/direction.html" target="_blank">实例路径（建议down下整个flex目录）</a>

###### 2.flex-wrap 属性决定如何换行 

```text
.box {
    flex-wrap : nowrap || wrap || wrap-reverse
}
```

* nowrap : 不换行（默认值) ;
* wrap : 换行，且第一行在上方 ;
* wrap-reverse : 换行，且第一行在下方 ;

<img src="./imgs/flex-wrap.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/flex-wrap.html" target="_blank">实例路径（建议down下整个flex目录）</a>

###### 3.flex-flow 属性是flex-direction和flex-wrap属性的简写模式

```text
 .box {
     flex-flow : <flex-direction> && <flex-wrap>
 }
```

<img src="./imgs/flex-flow.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/flex-flow.html" target="_blank">实例路径（建议down下整个flex目录）</a>

(*不一一组合举例*)

###### 4. justify-content属性定义项目在主轴的对齐方式

```text
.box {
    justify-content : flex-start || flex-end || center || space-between || space-around ;
}
```
* flex-start(默认值) : 左对齐 ；
* flex-end : 右对齐 ；
* center : 居中 ； 
* space-between : 两端对齐，元素之前的间距相等 ；
* space-around : 每个元素两侧的间距相等。所以，项目之间的间隔比项目与边框的间距大一倍。

<img src="./imgs/justify-content.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/justify-content.html" target="_blank">实例路径（建议down下整个flex目录）</a>

(**注意与flex-direction:row与justify-content:flex-start和flex-direction:row-reverse与justify-content:flex-end之间的区别**)

###### 5.align-items属性定义项目在交叉轴上如何对齐
```text
.bod {
    align-items : flex-start || flex-end || center || baseline || stretch ;
}
```
* flex-start : 交叉轴的起点对齐；
* flex-end : 交叉轴的终点对齐；
* center : 交叉轴居中；
* baseline : 元素的子元素的以第一行文字的基线对齐(*暂时没有想到实用性*)；
* stretch(默认值) : 如果元素没有设置高度或者设为auto，元素的高度将占满整个容器的高度;

<img src="./imgs/align-items.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/align-items.html" target="_blank">实例路径（建议down下整个flex目录）</a>

###### 6.align-content属性定义多根轴线的对齐方式，如果项目只有一个轴线，则该属性不起作用。
```text
.box {
    align-content : flex-start || flex-end || center || space-between || space-around || stretch ;
}
```
* flex-start : 与交叉起点对齐；
* flex-end : 与交叉轴终点对齐；
* center : 与交叉轴中点对齐；
* space-between : 与交叉轴两端对齐，轴线之间的间隔平均分布；
* space-around : 轴线两侧的间隔都相等；
* stretch : 轴线占满整个交叉轴；

<img src="./imgs/align-content.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/dadEle/align-content.html" target="_blank">实例路径（建议down下整个flex目录）</a>

(*注意与align-items的区别；与justify-content的相似处*)

## 三、flex布局下的元素属性

###### 1.order属性定义元素的排列顺序，数值越小，排列越靠前，默认为1.

```text
.ele {
    order : <num> ;
}
```

<img src="./imgs/order.png">

*经过实测负数跟零也遵从属性（没有测小数点的影响）*

<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/sonEle/order.html" target="_blank">实例路径（建议down下整个flex目录）</a>



###### 2.flex-grow属性定义元素的的放大比列，默认值为0，即无论剩余空间有多大，都不会放大。

> 1.注意这里的放大是相对于父元素主轴上的剩余长度的比列（有点瓜分父亲财产的意思），如果主轴无剩余长度，则基数为零（即都不会放大）；不为零时，则按各子元素的放大比列平均分配；

> 2.负数不是有效值；

> 3.不影响交叉轴的长度。

 ```text
  .ele {
      flex-grow : <num> ;
  }
 ```
<img src="./imgs/flex-grow.png">
<a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/sonEle/flex-grow.html" target="_blank">实例路径（建议down下整个flex目录）</a>
 
 ###### 3.flex-shrink属性定义项目的缩小的比列，默认为1，如果空间不足，该元素将缩小，
 
 ```text
 .ele {
     flex-shrink : <num> ; /* default 1 */
 }
 ```
 
 如果一个元素的默认值为0，其他元素的默认值为1，当容器空间不足时，为0的元素不变，其他的元素缩小；多个元素时属性值越大，缩小比列越大。（*负值对该属性无效*）
 
 <img src="./imgs/flex-shrink.png">
  <a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/sonEle/flex-shrink.html" target="_blank">实例路径（建议down下整个flex目录）</a>
  
 
 ###### 4.flex-basis属性定义了在分配多余空间之前，元素占据的主轴空间。浏览器根据这个属性，计算主轴是否有剩余空间。它的默认值为auto,即元素的默认大小。
 
 ```text
 .ele {
     flex-basis : <length> || auto ; /*default auto*/
 }
  ```
  
  可以设为跟height和width属性一样的值，则元素将占据固定空间。
  
 
 ###### 5.flex属性是flex-grow、flex-shrink和flex-basis的简写,默认值为0 1 auto.
 
 ```text
 .ele {
     flex : node || auto || [ <flex-grow> <flex-shrink> <flex-basis>  ] ; 
 }
 ```
 
 该属性有两个快捷键值：auto ( 1 1 auto )和 none ( 0 0 auto )。
 
 ###### 6.align-self属性允许单个项目与其他项目不一样的对齐方式，优先权大于父元素设置的align-items属性，默认值为auto,表示继承父元素的align-items属性。
 
 ```text
 .ele {
     align-self : auto || flex-start || flex-end || center || baselin || stretch ; /*default auto*/
 }
 ```
 
 该属性的的出auto继承父元素的align-items外，其他的都与align-items的属性结果相同。
 
 <img src="./imgs/align-self.png">
  <a href="https://github.com/Iwouldliketobeapig/shouldKnow/blob/master/flex/demo/sonEle/align-self.html" target="_blank">实例路径（建议down下整个flex目录）</a>
   