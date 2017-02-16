#### 名词解释

Schema : 一个文件形式储存的数据库模型骨架，不具备数据库操作能力；

Module : 由Schema发布生成的模型，具有抽象属性行为和数据库操作对；

Entity : 由Module创建的实体，操作也会影响到数据库；

## mongooes小结（待修改）

1.引入mongooes:

```text
    let mongooes = require ( 'mongooes' ) ;
```

2.连接数据库

```text
    let db = mongooes.createConnection ( 'host' , 'database' , 'port' , '等数据库信息'  ) ;
```

3.连接检测

```text
    db.on.( 'error' , console.error.bind( cosnole , 'connect erro' ) ) ;
    db.once( 'open' , function(){
        //once open code
    } ) ;
```

