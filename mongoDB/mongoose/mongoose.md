#### 名词解释

Schema : 一个文件形式储存的数据库模型骨架，不具备数据库操作能力；

Module : 由Schema发布生成的模型，具有抽象属性行为和数据库操作对；

Entity : 由Module创建的实体，操作也会影响到数据库；

#### 对应eg ( https://github.com/Iwouldliketobeapig/User/blob/master/mongooes.js )

## mongooes小结（待修改）

#### 一、入门操作

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
4.定义一个储存模型骨架

```text
    let PersonSchema = new mongooes.Schema ( {
        name : string , //用户名
    } ) ;
```

5.由上面的Schema发布一个模型model

```text
    let PersonModule = db.model( 'Person' , PersonSchema ) ;
    //如果Module已经发布，则可以通过名字索引
    //let PersonModule = db.model ( 'Person' ) ;
```

6.创建Entity实体

```text
    let personEntity = new PersonModule( { name : 'dutao' } ) ;
```

7.执行Entity的save方法，向数据库中添加该条数据

```text
    personEntity.save()
```

8.依赖model执行查询

```text
    PersonModuel.find ( function ( err , person ) {
        if ( err ) {
            console.log( '查询失败' ) ;
        } else {
            console.log( person ) ;
        }
    } ) ;
```

###### 简单结合

1.添加数据
```text
    let db = mongoose.createConnection ( config.host , config.database ) ;
    db.on ( 'error' , console.error.bind ( console , '连接错误' )  ) ;
    db.once ( 'open' , function () {
        console.log( 'success connect' ) ;
    })  ;
    let PersonSchema = new mongoose.Schema ( {
        name : String
    } ) ;
    let PersonModel = db.model ( 'Person' , PersonSchema ) ;
    let personEntity = new PersonModel ( { name : 'liushihao' } ) ;
    personEntity.save () ;
```

2.查询数据
```text
    let db = mongoose.createConnection ( config.host , config.database ) ;
    db.on ( 'error' , console.error.bind ( console , '连接错误' )  ) ;
    db.once ( 'open' , function () {
        console.log( 'success connect' ) ;
    })  ;
    let PersonScheam = new mongoose.Schema ( {
        name : String
    } ) ;
    let PersonModel = db.model ( 'Person' , PersonScheam ) ;
    PersonModel.find ( function ( erro , person ) {
        if ( erro ) {
            console.log ( erro ) ;
        } else {
            console.log ( person ) ;
        }
    } ) ;
```

#### 二、point小记

###### 1.Schema—数据库原形

1.1 定义Schema对象

```text
    let PersonScheam = new Schema ( {
        name : String ,
        xxx : yyy
        //xxx表示定义一个属性,yyy表示属性类型Scheam.Type
    } ) ;
```

1.2 Schema.Type : 是由mongooes内定的一些数据类型

1.3 Scheam.Types : 是由mongooes自定义的类型

```text
    var ExampleSchema = new Schema({
          name:String,
          binary:Buffer,
          living:Boolean,
          updated:Date,
          age:Number,
          mixed:Schema.Types.Mixed, //该混合类型等同于nested
          _id:Schema.Types.ObjectId,  //主键
          _fk:Schema.Types.ObjectId,  //外键
          array:[],
          arrOfString:[String],
          arrOfNumber:[Number],
          arrOfDate:[Date],
          arrOfBuffer:[Buffer],
          arrOfBoolean:[Boolean],
          arrOfMixed:[Schema.Types.Mixed],
          arrOfObjectId:[Schema.Types.ObjectId]
          nested:{
            stuff:String,
          }
        });
```

1.3 Mixed类型 ： Scheam,Types.Mixed自定义的一种混合类型

