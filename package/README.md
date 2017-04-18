## 前言

> 作者：我原是是猪

> 邮箱：1173127007@qq.com **欢迎补充，指错，讨论**

# node中的package.json配置

1. 本文学习node中paceage.json的一些必要的配置;

## 字段介绍

1. package.json必须是json,而不是一个javascript字面对象;

2. package,json中必须的字段为name和version,缺失的话，不能install.

#### name

1.name的长度不能大于214个字符；

2.name不能以"."或者"_"开头；

3.name不能包含大写字母；

4.name会成为url的一部分，不能含有url的非法字符；

5.建议不要在name中有node和js字段；

#### version

1.version必须能够被<a href="https://github.com/npm/node-semver" target="_blank">node-semver</a>解析

#### description

1.描述，可以写一句话来描述整个项目,在npm search搜索时，该字段也会作为关键字；

#### keywords

1.一个字符串，该项目的关键字，在npm search搜索时，该字段也会作为关键字；

#### homepage

1.项目官网的url；

#### bugs 

1.项目提交问题的url或者邮箱地址；

```text
"bugs": {
    "url": "url",
    "email": "email"
}
```

#### license

1.可以指定一个许可证，让使用者知道权利和权限(可以使用一些通用的许可证，列如*BSD*、*MIT*)；
```text
    { "license": "BSD" }//通用许可证
    //自定义许可条件
    "license": {
        "type": "dutao",
        "url": "https://github.com/Iwouldliketobeapig" 
    }
```

#### 和用户相关的属性： author, contributors

1. author表示一个开发者，contributors一个数组，表示一组开发者
```text
{
//author
 "author": {
      "name": "dutao",
      "email": "1173127007@qq.com",
      "url": "https://github.com/Iwouldliketobeapig"
 }
//contributors
/*
"contributors": [
     {
         "name": "pig",
         "email": "1173127007@qq.com",
         "url": "https://github.com/Iwouldliketobeapig"
     },
     {
          "name": "liushihao",
          "email": "1173127007@qq.com",
          "url": "https://github.com/Iwouldliketobeapig"
     }
 ]
*/
}
```