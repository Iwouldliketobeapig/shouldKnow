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

* 使用flex布局后，子元素的float,chear和vertical-align属性将失效 ；

## 一、基本概念

* 采用Flex布局的元素，称为Flex容器；

* 容器默认存在两个值：水平的主轴（main axis）和垂直的交叉轴（cross axis） ;

* 住轴开始的位置( 与边框的交叉点 )，叫做main start; 主轴的结束的位置，叫做main end ;

* 交叉轴开始的位置叫cross start; 交叉轴结束的位置叫cross end ;

* 单个项目占据的主轴空间叫main size,占据交叉轴的空间叫cross size ;


## 二、容器属性

1.flex-direction 属性决定住轴的方向（即项目的排列方向）；

```text
    .box {
        flex-direction : row || row-reverse || column || column-reverse ;
    }
```
* row : 水平主轴方向，起点在左端 ；
* row-reverse : 水平主轴方向，起点在右端 ；
* column : 竖直交叉轴方向，起点在上沿 ；
* column-reverse : 竖直交叉轴方向，起点在下沿 ；

2.flex-wrap 属性决定如何换行 

```text
    .box {
        flex-wrap : nowrap || wrap || wrap-reverse
    }
```

* nowrap : 不换行（默认值) ;
* wrap : 换行，且第一行在上方 ;
* wrap-reverse : 换行，且第一行在下方 ;

3.flex-flow 属性是flex-direction和flex-wrap属性的简写模式

```text
     .box {
         flex-flow : <flex-direction> && <flex-wrap>
     }
```
4. justify-content属性定义项目在主轴的对齐方式

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

5.align-items属性定义项目在交叉轴上如何对齐
```text
    .bod {
        align-items : flex-start || flex-end || center || baseline || stretch
    }
```
* flex-start : 交叉轴的起点对齐；
* flex-end : 交叉轴的终点对齐；
* center : 交叉轴居中；
* baseline : 元素的第一行文字的基线对齐；
* stretch(默认值) : 如果元素没有设置高度或者设为auto，元素的高度将占满整个容器的高度；



