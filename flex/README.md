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




