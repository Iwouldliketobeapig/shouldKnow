# es6

#### let命令：声明命令，只在代码块内有效

* 不存在变量提升
* 暂时性死区
* 不允许重复声明

#### 块级作用域

* 外层作用域无法访问
* 内存作用域可以定外层作用域同名变量

#### const命令：声明一个只读常量

* 与let作用域相同
* (Object.freeze(object) //冻结对象使对象不可扩展、无法改变属性和更改属性、无法更改数据属性值)

### 变量的解析赋值

#### 数组的解析赋值

* 模式匹配
* 允许指定默认值：默认值生效的条件是，对象的属性值严格等于undefined

#### 对象的结构赋值

* 属性同名：let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
* 允许指定默认值：默认值生效的条件是，对象的属性值严格等于undefined

#### 字符串的解析赋值

* 字符串被转换为一个类似数组的对象

#### 数值和布尔值得解析赋值

#### 函数的解析赋值

#### 圆括号的问题

#####  不能使用圆括号的情况

* 变量声明中不能带有圆括号
* 函数参数中不能带有圆括号
* 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号中

##### 可以使用圆括号的情况

* 赋值语句的非模式部分可以使用圆括号

#### 用途

* 交换变量的值
* 从函数返回多个值
* 函数参数的定义
* 提取json数据
* 函数参数的默认值
* 便利Map结构
* 输入模块的指定方式

### 字符串扩展

* 字符的Unicode表示法
* codePointAt(): 识别大于0xffff的Unicode编号，正确处理4个字节储存的字符,判断一个字符是否由四个字节组成(a.codePointAt(0) > 0xffff)
* String.fromCodePoint():识别大于0xffff的Unicode编号
* for...of: 遍历循环
* at(): 识别大于0xffff的Unicode编号
* normalize(): 将字符不同的表达方式统一为同样的形式
* includes(), startsWith(), endsWith()
```text
includes(s) //返回布尔值，表示是否找到参数字符串
startsWith(s) //返回布尔值，表示参数字符串是否在原字符串的头部
endsWith(s) //返回布尔值，表示参数字符串是否在原字符串的尾部
```
* repeat(n): 表示将原字符串重复n次(1.接受小于-1的参数报错；2.NaN相当于0；3.字符串会先转换为数字)
* padStart(),padEnd(): 字符串补全长度
    * 1.padStart(len, str)用于头部补全，padEnd(len, str)用户尾部补全
    * 2.如果原字符串的长度不小于len,则返回原字符串
    * 3.在条件2不成立的情况下，如果原字符串长度加str长度大于len，则截取str补全原字符串
    * 4.如果省略第二个参数，则用空格补齐
* 模板字符串：`sadasd${ele}234`
    * 1.可以用来定义多行字符串，或者嵌入变量
    * 2.所有模板字符串的空格和换行都是保留的，可以用trim()方法消除
    * 3.模板字符串中还能调用函数
    * 4.模板字符串可嵌套
* String.raw``： 模板字符串的处理函数,返回一个斜杠都被转义的字符串，对应于替换变量后的模板字符串
    * 1.如果字符串的斜杠已经转义，则不做任何处理
    * 2.可以作为正常的函数使用。
    ```text
    String.raw`hi\n${2+3}`;
    // "h1\\n5"
    String.raw({raw: "test"}, 0,1,2);
    //"t0e1s3t"
    //相当于String.raw({raw: ["t","e","s","t"], 0,1,2})
    ```
* 模板字符串的限制
    * 模板字符串默认会将字符串转义，导致无法嵌入其他语言

### 正则的扩展

* ES6中如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。正则表达式会忽略原有正则表达式的修饰符，只使用新指定的修饰符。
  ```text
  new RegExp(/abc/ig, 'i').flags //修饰符i:忽略大小写; g:全文找茬出现所有匹配字符; m:多行查找
  ```
* 字符串的正则方法：在语言内部全部调用RegExp的实例方法

    (
    ```text
    string.match(reg); //如果没有找到则返回null;返回数组，找到则返回index和input
    string.search(reg); //找到匹配项返回匹配项位置，否则返回-1
    ```
    )
* u修饰符: 用来正确处理大于\uffff的Unicode字符
    * 点字符：（.字符在正则表达式中，含义是出了换行以外的任意耽搁字符），对于大于0xFFFF的Unicode字符，点字符不能识别。需要加上u修饰符
    ```text
    var s = '𠮷';
    /^.$/.test(s) // false
    /^.$/u.test(s) // true
    ```
    * Unicode字符表示法：es6新增使用大括号表示Unicode字符，比较加上u修饰符，才能识别
    ```text
    /\u{20BB7}/u.test('𠮷') // true
    ```
    * 量词:使用u字符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符
    ```TEXT
    /𠮷{2}/u.test('𠮷𠮷') // true
    ```
    * 预定义模式：能否正确识别码点大于0xFFFF的Unicode字符
    ```text
    /^\S$/u.test('𠮷') // true,\S匹配所有不是空格的字符
    ```
    * i修饰符：识别非规范字符
* y修饰符：（“粘连”修饰符），后一次匹配都从上一次匹配成功的下一个位置开始
    * y修饰符遵守lastIndex属性，但是必须在lastIndex指定的位置发现匹配
    * 
* sticky属性：返回正则表达式的修饰符
```text
/abc/ig.source //返回正文
/abc/ig.flags //返回修饰符
```
* RegExp.escape(): 字符串必须转义才能为正则模式（提案）
* s修饰符：dotAll模式（提案）
    * 在正则表达式中，.是一个特殊字符，代表任意单个字符。但是行终止字符除外
    ```text
    //终止字符
    U+000A 换行符（\n）
    U+000D 回车符（\r）
    U+2028 行分隔符（line separator）
    U+2029 段分隔符（paragraph separator）
    ```
    ```text
    const re = /foo.bar/s;
    // 另一种写法
    // const re = new RegExp('foo.bar', 's');
    re.test('foo\nbar') // true
    ```
* 后行断言

### 数值的扩展    
* 二进制和八进制表示法
    * 0b(0B)前缀表示二进制，0o(0O)前缀表示八进制
    ```text
    0b111110111 === 503 // true
    0o767 === 503 // true
    ```
    * 将0b和0o前缀的字符串改为十进制用Number方法
    ```text
    Number('0b111')  // 7
    Number('0o10')  // 8
    ```
* Number.isFinite(),Number.isNaN()
    * Number.isFinite()用来检测一个数值是不是有限的
    * Number.isNaN()用来检查一个值是不是NaN
* Number.parseInt(),Number.parseFloat()
    * 将全局方法parseInt()和parseFloat()移植到Number对象上，行为完全保持不变
* Number.isInteger(): 用来判断一个值是否为整数
* Number.EPSILON: 新增的一个极小的常量，可以用来检查误差
* 安全整数和Number,isSafeInteger()
    * ES6引入了Number.MAX_SAFF_INTEGER和Number.MIN_SAFF_INTEGER两个常量，用来表示整数范围的上下线
    * Number.isSafeInteger()用来判断一个整数是否在这个范围内
* Math对象扩展
    * Math.trunc(): 去除一个数的小数部分
        * 对于非数值,Math.trunc()现在内部用Number方法将其转换为数值
        * 空值和无法截取整数的值，返回NaN
    ```text
    Math.trunc(12.31); //12
    ```
    * Math.sign(): 判断一个数到底是整数、负数、还是零
        * 参数为正数，返回+1
        * 参数为负数，返回-1
        * 参数为0，返回0
        * 参数为-0，返回-0
        * 参数为非数值，返回NaN
    * Math.cbrt(): 计算一个方法的立方根
        * 对于非数值，Math.cbrt()会在内部用Number方法将其转换为数值，空值和无法截取的值，返回NaN
    
    * Math.clz32(): 返回一个数的32位无符号整数形式有多少个前导0
        * 只考虑整数部分
        * 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。
    * Math.imul(): 返回两个数以32位带符号整数形式相乘的结果，返回一个32位的带符号证书
    * Math.fround(): 返回一个数的单精度浮点书形式。
        * 无法用64个二进制位精确表示的小数，接近Math.fround方法会返回最这个小数的单精度浮点数。
    * Math.hypot(): 方法返回所有参数的平方和的平方根。
     ```text
     Math.hypot(3, 4); //5
     ```
    * 四个与对数相关的方法
        * (1)Math.expml(): Math.expm1(x)返回e(x) - 1，即Math.exp(x) - 1
        * (2)Math.log1p(): Math.log1p(x)方法返回1 + x的自然对数
        * (3)Math.log10(x): 返回以10为低的x的对数
        * (4)Math.log2(): 返回以2为底的对数
     （Math.log(x):返回一个数的自然对数）
    * Math.signbit()[提案]: 判断一个书的符号位是否设置了
        * 如果参数是NaN,返回的false
        * 如果参数是 -0,返回true
        * 如果参数是负值，返回true
        * 其他情况返回false
    * 指数运算符(**)
    ```text
    2 ** 2 // 4;
    a **= 2 // a = a * a;
    // 指数运算符与Math.pow的实现方式不同
    ```
    * Integter[提案]: 新的数据类型，整数类型
        * 整数类型只用来表示整数，没有位数的限制，任何整数都可以精确表示
        * Integer类型的数据必须使用后缀n表示
        * 二进制、八进制、十六进制的表示法，都要加上后缀n
        ```text
        1n + 2n //3n
        0b110n 
        0o12
        0xffn
        ```
        * typeof运算符返回integer
        ```text
        typeof 12n // integer
        ```
### 函数的扩展
* 1.ES6允许函数的参数设置默认值，直接写在参数定义的后面。
    ```text
    function(x = 5) {
        console.log(x);
    }
    ```
    * 参数声明是默认声明的，不能使用let或const再次声明
    * 使用参数默认值时，不能有同名参数
    * 参数默认值是惰性求值的
    * 与解构赋值默认值结合使用
    * 默认值参数，应该是函数的尾参数
    * 函数的length属性：指定默认值后，函数的length属性，将返回没有指定默认值得参数个数（如果设置了默认值得参数不是尾参数，length属性不在计入后面的参数）
    * 作用域
        * 使用参数默认值后，函数进行声明初始化时，参数会形成一个单独的作用域。
        ```text
        var x = 1;
        function f(x, y = x) {
            console.log(y);
        }
        f(2) //2
        ```
        * 如果参数的默认值是一个函数，该函数的作用域也遵守这个规则
        ```text
        let foo = "outer"
        function f(y = x => foo) {
            let foo = "inner";
            console.log(y());
        }
        f() //outer
        ```
* 2.rest参数: 形式为（...变量名），用于获取函数的多余参数
    ```text
    function add(...values) {
        let sum = 0;
        for (var val of values) {
            sum += val;
        }
        return sum;
    }
    add(1, 2, 3); //6
    ```
    * rest参数之后不能再有其他参数
    * 函数的length属性不包括rest
* 3.严格模式
    * 规定只要函数使用了默认值、解构赋值、或者扩展运算符，内部函数就不能显示设定为严格模式
* 4.name属性
    * 函数的name属性，返回该函数的函数名
    * Function构造函数返回的函数实例，name属性的值为anonymous
    * bind返回的函数，name属性会加上bound前缀
* 5.箭头函数
    ```text
    var f = v => v; //等同于
    function f(v) {
        return v;
    }
    ```
    * 如果箭头函数不需要参数或者多个参数，使用圆括号
    * 如果箭头函数的代码块对于一行则用大括号括起来
    * 如果直接返回一个对象，需要用圆括号括起来
    * 箭头函数可以与变量解构结合
    * tips
        * 函数的体内的this对象，就是定义时所在的对象，而不是使用时所在的对象(箭头函数没有this,导致指向外层代码块)
        * 不可以当作构造函数
        * 不可以使用arguments对象，该对象在函数体内不存在
        * 不可以使用yield
    *  嵌套得箭头函数
* 6.绑定this[提案]：函数绑定运算符石并排的两个冒号（::）,左边是一个对象，右边是一个函数
    ```text
    foo::bar; 
    bar.bind(foo); //等同于
    ```
    * 如果双冒号左边为空，右边是一个对象的方法，等于将方法绑定在该对象上面
### 数组的扩展
* 1.扩展运算符：将一个数组转为用逗号分隔的参数序列
    * 替代数组apply方法
    ```text
    var arr = [1, 2, 3];
    function f(x, y, z) {
        // 代码块
    }
    f.apply(null, arr);
    f(...arr); //等同
    ```
    * 合并数组
    * 与解构赋值结合
    * 函数的返回值
    * 字符串
    ```text
    [..."hi"] //["h", "i"]
    ```
    * 实现Iterator接口的对象、
    * Map 和 Set解构， Generator函数
* 2.Array.from(): 用于将类似数组对象(array-like-object)和可遍历的对象
    ```text
    let arrayLike = {
        "0", "a",
        "1", "b",
        length: 2
    }
    // ES5写法
    var arr1 = [].slice.call(arrayLike); // ["a", "b", "c"]
    ```
    // ES6写法
    var arr2 = Array.from(arrayLike);
    * 只要部署了Iterator(字符串和Set结构)接口的数据结构，都能将其转换为数组
    ```text
    Array.from("du");
    // ["d", "u"]
    let nSet = new Set(["a", "b"]);
    ```
    * Array.from还接受第二个参数，对元素进行处理，处理后再放入到数组中
* 3.Array.of(): 将一组值，转换为数组
* 4.copyWithin(): 在当前数组内部，将指定位置的成员复制到其他位置
    ```text
    copyWidthin(target, start, end);
    // target(必须): 从该位置开始替换数据
    // start: 从该位置开始读取数据
    // end: 到该位置停止读取数据

    [1, 2, 3, 4].copyWithin(0, 2);
    // [3, 4, 3, 4]
    ```
* 5.数组实例的find()和findIndex()
    find(): 找出第一个符合条件的数组成员
    findIndex(): 找出第一个符合条件的数组成员的位置
* 6.数组实例fill(): 使用给定值，填充一个数组
    ```text
    new Array(3).fill(7)
    // [7, 7, 7]
    ```
* 7.数组实例enteries(),keys()和values(): 用于数组遍历
    ```text
    const arr = [1, 2, 3];

    for(let [index, ele] of arr.enteries()) {
        console.log(index, ele);
    } // enteries()是对键值对得遍历
    // 0 1
    // 1 2
    // 2 3

    for(let index of arr.keys()) {
        console.log(index);
    } //keys()是对键名的遍历
    // 0
    // 1
    // 2

    for(let val of arr.values()) {
        console.log(val);
    } // values()是对键值的遍历
    // 1
    // 2
    // 3
    ```
* 8.数组实例的includes(): 查找数组时候包含给定的值，返回一个布尔值
    ```text
    [1, 2, 3].inclides(2, 0) // val: 给定的只, index: 开始搜索的位置
    // true
    ```
* 9.数组的空位: 数组的某一个位置没有任何值
    * 由于空位处理规则非常不统一，避免出现空位
### 对象的扩展
* 1.属性的简洁表示法: 允许直接写入变量和函数，作为对象的属性和方法
    ```text
    var foo = "dutao";
    var baz = {foo};
    baz // {foo: "dutao"};
    ```
* 2.属性名表达式
    ```text
    var obj = {};
    obj.abc = 123; // 等价于
    obj["a" + "bc"] = 123
    ```
    * 可以将表达式放在方括号内
    ```text
    let testKey = "foo";
    let obj = {
        [testKey]: "dutao"
    }
    // {foo: "dutao"}
    ```
    * 表达式也可以定义方法名
    * 属性名表达式与简洁表达式不能同时使用
    * 属性名表达式如果是一个对象，默认情况下会被转换为字符串
* 3.函数的name属性：返回函数名
    * 如果对象的方法是用了getter和setter.该方法的属性的描述的对象的get和set属性上面
    * bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous
    * 如果对象的方法是一个Symbol,那么name属性返回的是这个Symbol值得描述
* 4.Object.is(): 同值相等
* 5.Object.assign(): 对象合并
    * 只拷贝对象的自身属性，不拷贝继承属性，也不拷贝不可枚举的属性
    * 属性名为Symbol值得属性，也会被拷贝
    * 实现的是浅拷贝
    * 嵌套对象，遇到同名属性是替换而不会添加嵌套里面的属性
    ```text
    const obj1 = { a: { b: "du", c: "tao" } };
    const obj2 = { a: { b: "zhang" } };
    Object.assign(obj1, obj2);
    // { a: { b: "zhang" } }
    ```
    * 可以用来处理数组，把数组当作对象处理
* 6.属性的可枚举和遍历
* 7.Object.getOwnPropertyDescriptors(): 返回某个对象属性的描述对象
    * 结合Object.defineProperties或者Object.create实现拷贝
    * 可以用来实现Mixin(混入)模式
* 8.__proto__属性，Object.setPrototypeOf()[设置一个对象的prototype性能会比较低，不建议使用] ,Object.getPrototypeOf()
    * __proto__用来读取或者设置当前对象的prototype对象
        ```text
        var obj = {
            methods: function() {};
        }
        obj.__proto__ = someOtherObj;
        ```
    * Object.setPrototypeOf(obj, prototype): 设置一个对象的prototype对象，返回参数对象本身;
        ```text
        let proto = {};
        let obj = {a: 10};
        Object.setPrototypeOf(obj, proto);
        proto.b = 20;
        proto.c = 30;

        obj.b; // 20
        ```
        * 如果第一个参数不是对象，会自动转换为对象
    * Object.getPrototypeOf(): 用于读取一个对象得原型对象
    ```text
    Object.getPrototypeOf(obj);
    ```
* 9.Object.keys(),Object.valuse(),Object.entries()
    * Object.keys: 返回一个数组，成员是参数对象自身得（不含继承得）所有可遍历属性得键名
    * Object.value: 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值
        * 会过滤属性名Symbol值得属性
        * 如果Object.value方法的参数是一个字符串，会返回各个字符串组成的一个数组
    * Object.entries: 返回一个数组，成员是参数对象自身的（不含继承）所有可遍历属性的键值对数组
        ```text
        let obj = {a: "du", b: "tao"};
        
        object.keys(obj);
        // ["a", "b"]
        Object.value(obj);
        // ["du", "tao"]
        Object.entries(obj);
        // [["a", "du"], ["b", "tao"]]
        ``` 
        * 会过滤属性名Symbol值的属性
* 10.对象的扩展运算符
    * (1)解构赋值: 将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面
        ```text
        let { x, ...y } = { x: 1, a: 2, b: 3, c: 4 };
        x // 1
        y // { a: 2, b: 3, c: 4 }
        ```
        * 解构赋值要求等号右边是一个对象
        * 解构赋值必须是最后一个参数
        * 解构赋值的拷贝是浅拷贝
    * (2)扩展运算符：用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
        ```text
        let z = { a: 3, b: 4 };
        let n = {...z};
        n // { a: 3, b: 4 }
        ```
        * 可以用于合并两个对象
        ```text
        let ab = { ...a, ...b };
        ```
        * 如果用户自定义的属性，放在扩展运算符后面，则运算符内部的同名属性会被覆盖掉
        ```text
        let obj = { ...a, ...b }
        // 等同于
        let obj1 = Object.assign({} , a, b);
        ```
        * 对象扩展运算符后面可以跟表达式
        * 如果扩展运算符的参数是null或undefined，值被忽略，不会报错
        * 扩展运算符的参数对象中，如果有取值函数get,这个函数是会执行的
        ```text
        let runtimeError = {
            ...a,
            ...{
                get x() {
                    throw new Error("throw now");
                }
            }
        }
        ```
* 11.Null 传导运算符[提案]: ?.
    ```text
    const firstName = (message
    && message.body
    && message.body.user
    && message.body.user.firstName) || 'default';
    // 等价于
    const firstName1 = message?.body?.user?.firstName || 'default';
    ```
    * 只要其中一个返回null或undefined,就不在往下运算
    * 四种用法
        * obj?.prop // 读取对象属性
        * obj?.[expr] // 同上
        * func?.(...args) // 函数或对象方法的调用
        * new C?.(...args) // 构造函数的调用
### Symbol
* 1.概述：保证每个属性的名字都是独一无二的
    ```text
    let s = Symbol();
    typeof s; // Symbol
    ```
    * Symbol前不能使用new命令，因为生成的Symbol是一种原始类型的值，不是对象
    * Symbol接受一个字符串参数，表示对Symbol实例的描述
        ```text
        let s1 = Symbol("para1");
        let s2 = Symbol("para2");

        s1 // Symbol(para1);
        s2 // Symbol(para2);
        ```
    * 如果Symbol的参数是一个对象，如果对象有toString,描述toString的返回值，否则为Symbol[Object Object]
        ```
        const obj = {
            toString() {
                return "dutao";
            }
        }
        const obj1 = {
            to() {
                return "dutao"
            }
        }
        const s = Symbol(obj);
        const s1 = Symbol(obj1);
        s // Symbol(dutao);
        s1 // Symbol([Object Object]);
        ```
    * 相同的Symbol描述，返回的值是不相同的
    * Symbol不能与其他类型的的值进行运算，会报错
    * Symbol可以转为为字符串和布尔值
* 2.作为属性名的Symbol: 保证不会出现同名的属性
    * Symbol值作为对象属性名时，不能用点运算符
    * Symbol值作为属性名时，该属性还是公开属性
* 3.消除魔术字符串
* 4.属性名的遍历
    * 不能被for...in、for...of、Object.keys()、Object.getOwnProtertyNames()、JSON.stringify()返回。Object.getOwnProtertySymbols()获取对象的所有Symbol属性名
    * 非私有的你内部实现方法的效果
* 5.Symbol.for(),Symbol.keyFor()
    * Symbol.for可以实现重新使用同一个Symbol值
    * Symbol.for会登记在全局作用域中，Symbol不会
    * Symnol.keyFor返回一个以登记的Symbol类型值得key
    ```text
    let s1 = Symbol.for("dutao");
    let s2 = Symbol.for("dutao");

    s1 === s2 //true
    Symobol.keyFor(s2); //"dutao"
    ```
* 6.实例：模块的Singleton模式
    * Singleton模式指的是调用一个类，任何时候返回的都是同一个实例
* 7.内置Symbol值
    * (1)Symbol.hasInstance: 对象的Symbol.hasInstance属性，指向一个内部方法，会在instanceof运算市自动调用
        ```text
        class MyClass {
            [Symbol.hasInstance](foo){
                return foo instance of Array;
            }
        }

        [] instanceof new MyClass() //true
        ```
    * (2)Symbol.isConcatSpreadable: 对象的Symbol.isConcatSpreadable属性是一个布尔值，表示使用Array.prototye.concat()时，是否可以展开
        ```text
        let arr = ["a", "b"];
        let arr1 = ["c", "d"];
        arr1.concat(arr, "e");
        // ["c", "d", "a", "b", "e"]
        arr[Symbol.isConcatSpreadable] //undefined

        arr[Symbol.isConcatSpreadable] = false;
        arr1.concat(arr, "e");
        // ["c", "d", Array(2), "e"]
        ```
        * 对于一个类来说，Symbol.isConcatSpreadable属性必须写成实例的属性
### Set和Map数据结构
* 1.Set
    * 基本用法：类似数组，但是成员的值都是唯一的，没有重复的值
        * Set本身是一个构造函数，用来生成Set数据结构
            ```text
            const s = new Set();
            [2, 2, 4].forEach(x => s.add(x));
            s // [2, 4]
            ```
        * Set函数可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数，用来初始化
        * 可以用于数组去重
        * 在Set内部两个NaN是相等的，两个对象总是不相等的
    * Set实例的属性和方法
        ```text
        Set.prototype.constructor // 构造函数，默认是Set函数
        Set.prototype.size // 返回Set实例的成员总数

        add(value) // 添加某个值
        delete(value) // 删除某个值，返回一个布尔值，表示删除是否成功
        has(value) // 返回一个布尔值，Set是否有这个成员
        clear() // 清空Set，无返回值
        ```
        * Arry.from可以将Set结构转换为数组
    * 遍历操作
        ```text
        keys() // 返回键名的遍历器
        values() // 返回键值得遍历器
        entries() // 返回键值对的遍历器
        forEach() // 使用回调函数遍历每个成员
        ```
        * （1）keys(),values(),entries()
            * Set结构键值和键名时同一个值，所以keys()和values()的行为完全相同
        * （2）forEach()
            * Set结构的实例的forEach方法，用于执行某个成员执行某种操作，没有返回值
        * （3）遍历的应用
            * set和filter方法也可以用于Set
* 2.WeakSet
    * 含义：不重复对象的得集合
        * WeakSet中的对象都是弱引用不计入垃圾回收机制
        * 只要对象在外部消失，在WeakSet中也消失了
        * WeakSet不可遍历
    * 语法：WeakSet是一个构造函数，可以用new命令，创建WeakSet数据结构
        * 可以接受一个数组或类似数组（Iterable）的对象作为参数，该数组的所有成员，都会成为WeakSet实例对象的成员（数组的成员只能是对象）
        * 三个方法
        ```text
        WeakSet.prototype.add(value); // 添加新成员
        WeakSet.prototype.delete(value); // 清除指定成员
        WeakSet.prototype.has(value); // 判断是否有指定值
        ```
* 3.Map
    * 含义和基本用法
        * 键值可以是各种类型，值-值的对应
        * Map接受一个数组作为参数（数组的成员是一个个表示键值对的数组）
            ```text
            const map = new Map([
                ["name", "dutao"],
                ["titel", "zhangwenqian"]
            ])
            map // { "name" => "dutao", "title" => "zhangwenqian" }
            ```
        * 对同一个键多次赋值，后面的值将覆盖前面额值
        * 只有对同一个对象的引用，Map结构才将其视为同一个键（Map的键是跟内存地址绑定的）
        * 如果Map的键是一个简单的类型的值，只要两个值严格相等，Map将其视为同一个键（===）
    * 实例的属性和操作方法
        * size属性返回Map结构的成员总数
        * set(key, value)设置或更新键值对，返回当前的Map对象=>链式写法
        * get(key)获取对应的键值
        * has(key)判断键是否存在
        * delete(key)删除某个键值对
        * clear()清除所有成员
    * 遍历方法
        ```text
        keys() // 返回遍历的键名
        values() // 返回遍历的键值
        entries() // 返回所有成员的遍历器
        forEach() // 遍历所有成员
        ```
    * 与其他数据结构的互相转换
        * （1）Map转为数组：最方便的方法是用扩展运算符
        * （2）数组转为Map: 将数组传入Map构转为造函数，就可以转为Map
        * （3）Map转为对象：只有当所有的Map的键都是字符串，才能转为对象
        * （4）对象转为Map
        * （5）Json转为Map: JSON转为Mapp,正常情况下，所有键名都是字符串
* 4.WeakMap
    * 含义：WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
        * WeakMap的键名所指向的对象，不计入垃圾回收机制(键名所引用的对象都是弱引用，一旦不需要，WeakMap里面的键名对象和所对应的键值对会自动消失)
        * WeakMap结构有足浴防止内存泄漏
        * WeakMap弱引用的只是键名，而不是键值，键值依然是正常引用
    * WeakMap语法
        * 没有遍历操作(没有key(),values,entries),没有size属性
        * 因为不确定性，不能渠道键名，不能清空(不支持clear)
        * WeakMap的四个方法
        ```text
        get() // 获取键值
        set() // 添加键值对
        has() // 判断存在
        delete() //删除键值对
        ```
    * WeakMap的用途
### Proxy
* 1.概述
    * 用户修改某些操作的默认行为
    * ES6提供Proxy构造函数，用来生成Proxy实例
        ```text
        var proxy = new Proxy(target, hander);
        // target参数表示所要拦截的目标对象
        // hander参数也是一个对象，用来定制拦截行为
        ```
        ```text
        // 实例
        var proxy = new Proxy({}, {
            get: function(target, property) {
                return 35;
            }
        });

        proxy.time // 35
        proxy.name // 35
        ```
    * 如果handler没有设置任何拦截，等同于直接通向原对象
    * Proxy实例也可以作为其他对象的原型对象
    * 同一个拦截器函数，可以设置拦截多个对象
    * 对于可以设置、但没有设置拦截的操作，直接落在目标对象上，按照原先的方式产生结果
        ```text
        get(target, propKey, receiver) // 拦截对象属性的读取
        set(target, proKey, value, receiver) // 拦截对象属性的设置
        has(target,propKey) // 拦截propKey in proxy的操作
        deketeProperty(target, propKey) // 拦截delete proxy[propKey]操作
        ownKeys(target) // 拦截Object.getOwnPropertyNames(proxy)和Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组，返回目标对象所有自身的属性的属性名
        getOwnPropertyDescriptor(target, propKey) // 拦截Object.getOwnPropertyDescriptor(proxy, propKey),返回属性的描述对象
        defineProperty(target, propKey, propDesc) // 拦截Object.defineProperty(proxy, propKey, propDesc)和defineProperties(proxy, propDescs),返回一个布尔值
        preventExtensions(target) // 拦截Object.preventExtensions(proxy)【让一个对象变得不可扩展，永远不能添加新属性】,返回一个布尔值
        getPrototypeOf(target) // 拦截Object.getPrototypeOf(proxy); 返回一个对象
        isExtensible(target) // 拦截Object.isExtensible【判断一个对象是否可扩展】, 返回一个布尔值
        setPrototypeOf(target, proto) // 拦截Object,setPrototypeOf(proxy, proto),返回一个布尔值
        apply(target, object, args) // 拦截Proxy实例函数调用操作
        construct(target, args) // 拦截Proxy实例作为构造函数调用的操作
        ```
* 2.实例的方法
    * get()
        ```text
        const person = {
            name: "dutao"
        };
        const proxy = new Proxy(person, {
            get (target, property) {
                if (property in target) {
                    return target[property]
                } else {
                    throw new ReferenceError(`Property ${property} is not defined`);
                }
            }
        });
        proxy.name // "dutao"
        proxy.name1 
        // VM392:9 Uncaught ReferenceError: Property name1 is not defined
            at Object.get (<anonymous>:9:27)
            at <anonymous>:1:6
        ```
        * 读取属性的操作(get),转变为执行某个函数，实现属性的链式操作
        * 如果一个书不可配置(configurable)和不可以写(writable),则该属性不可代理
    * set()
        * 写验证器(./demo/validator.proxy.js)
        * 结合get可以在对象的读写操作前执行一些操作
    * apply()
        * 拦截函数的调用、call、apply操作
    * has()
        * 拦截hasOwnproperty操作和in运算符
        * 如果原对象不可配置或者进制扩展，has拦截会报错(Object.freeze(obj)不可配置，Object.preventExtensions(obj)不可扩展)
        * has拦截对for...in循环不生效
    * construct()
        * 方法用于拦截new命令
    * deleteProperty()
        * 拦截delete操作，如果这个方法抛出错误或者返回false,当前属性无法被删除
    * defineProperty()
        * 拦截Object.defineProperty()和Object.defineProperties()
    * getOwnPropertyDescriptor()
        * 拦截Object.getOwnPropertyDescriptor()
    * getPrototypeOf()
        * 拦截获取对象原型
    * isExtensible()
        * 拦截Object.isExtensible
    * ownKeys()
        * 拦截对象自身属性的读取操作
    * preventExtensions()
        * 拦截Object.preventExtensions()
    * setPrototypeOf()
        * 拦截Object.setPrototypeOf方法
* 3.Proxy.revocable()
    * Proxy,revocable方法返回一个可取消的Proxy实例
    * Proxy.revocable的一个使用场景，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问
* 4.this
    * Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理
* 5.web服务的客户端
    * 很合适用来写 Web 服务的客户端
### Reflect
* 1.概述
    * （1）将Object对象的一些属于语言内部的方法，放到Reflext对象上，Reflect对象可以拿到语言内部的方法
    * （2）修改Object方法的返回结果，让其结果变得合理
    * （3）让Object操作都变成函数行为
    * （4）Reflect对象的方法与Proxy对象的方法是一一对应的，只要是Proxy上的方法都能在Reflect上找到（利用Reflect来完成默认行为"./validator.proxy.js"）
* 2.静态方法
    * 跟Proxy一样，提供十三个静态方法
* 3.实例：使用Proxy实现观察者模式
### Promise对象
* 1.Promise的含义
    * 是一个容器，里面保存着某个未来才会结束的事件的结果
    * Promise特点
        * 对象的状态不会受外界的影响(Pending, Fulfiled,Rejected)
        * 一旦状态改变，就不会再变(Pending->Fulfiled,Pending->Rejected)
        * 缺点
            * 一旦新建它就会立即执行，无法取消
            * 不设置回调函数，Promise内部抛出的错误，不会反应到外部
            * 处于Pending状态时，无法得知目前进展到哪一个阶段
* 2.基本用法
    ```text
    var promise = new Promise(function(resolve, reject){
        // some code
        if (/*异步操作成功*/) {
            resolve(value); // 将Pending -> Fulfiled
        } else {
            reject(error); // 将Pending -> Rejected,并抛出错误
        }
    });

    // Promise实例生成后，用then方法分别给Resolvue状态和Rejected状态回调函数
    promise.then(function(value) { //then方法在当前所有同步任务执行完才会执行
        // success
    }, function(error) {
        // failure
    });
    ```
    * 调用resolve或reject并不会终止Promise的函数的执行
    * 
* 3.Promise.prototype.then()
    * then方法定义在Promise的原形链上，then方法返回一个新的Promise实例（可以采用链式写法，第一个回调函数执行完成后，返回值可以作为第二个函数的参数）
* 4.Promise.prototype.catch()
    * 指定发生错误时候的别名 === .then(null, rejectfn())【区别在"./demo/promise.cathc.then.js"】;
    * then方法抛出的错误也会被catch获取
    * 如果Promise的状态已经是resolved,再抛出错误是无效的
    * 没有catch方法错误不会被捕获（Node的unhandledRejection事件，专门监听未捕获的时间"./demo/promise.cathc.then.js"）
    * catch也是一个Promise函数可以继续链式写法,catch无法获取链式写法后面的抛出的错误
* 5.Promise.all()
    * 将多个Promise实例包装成一个新的Promise实例,如果不是Promise实例，则调用Promise.resolve()转为Promise实例
        ```text
        let p = new Promise([p1, p2]);
        ```
    * 只有p1,p2的状态都变为fulfilled,p的状态才会变成fulfilled，且返回一个数组，传递给P的回调函数
    * 任意一个被rejected,p的状态就变成rejected,此时这个rejected作为p的返回值，传递给p的回调函数
    * 作为参数Pormise实例自己定义了catch方法，一旦被rejected,不会触发Promise.all()的catch方法
* 6.Promise.race()
    * 将多个Promise实例包装成一个新的Promise实例，获取第一个返回实例改变的状态返回值
* 7.Promise.resolve()
    * 将现有对象转为Promise对象
        * 参数是一个Promise实例，不做任何改变
        * 参数是一个thenable对象，转为Promise对象，然后立即执行thenable对象的then方法
            ```text
            let thenable = {
                then: function(resolve, reject) {
                    resolve(true);
                }
            }
            ```
        * 参数不是具有then方法的对象，或根本不是对象，返回一个新的Promise对象，状态为Resolved
        * 不带有任何参数，直接返回一个Resolved状态的Promise对象
* 8.Promise.reject()
    * 返回一个新的Promise实例，该实例的状态为rejected
* 9.自己部署两个有用得方法done()和finally()
### Iterator和for...of循环
* 1.Iterator的概念
    * 是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署了Iterator接口，就可以完成遍历操作
    * 过程
        * （1）创建一个指针对象，指向当前数据结构的起始位置
        * （2）第一次调用指针对象next方法，可以将指针指向数据结构的第一个成员
        * （3）不断的调用next,知道指向数据结构的结束位置
* 2.默认Iterator接口
    * ES6原生具备Iterator接口的数据
    ```text
    Array, Map, Set, String, TypedArray, 函数的arguments对象， NodeList对象
    ```
    * 其他数据结构的Interator接口，都需要在Symbol.Interator属性上部署，才会被for...of遍历部署
* 3.调用Iterator接口的场合
    * （1）结构赋值
    * （2）扩展运算符
    * （3）yield*
    * （4）其他场合
        ```text
        for...of
        Array.from()
        Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
        Promise.all()
        Promise.race()
        ```
* 4.字符串的Iterator接口
* 5.遍历器对象return(), throw()
* 6.for...of循环
    * 内部调用Symbol.iterator方法
### Generator 函数的语法
* 1.简介
    * Generator函数是一个状态机，封装多个内部状态(./demo/Generator.begin.js)
    * yield表达式
        * （1）遇到yield就暂停
        * （2）执行过程中没有遇到yield,遇到return则{value: "retVal", done: true }
        * （3）最后都没有return{value: underfined, done: true }
        * 惰性求值(./demo/Generator.begin.js)
        * Generator不使用yield成为暂缓存执行函数
        * yield只能在Generator函数中使用
        * yield在表达式中，必须放在圆括号内
        * yield作为函数参数，放到赋值表达式的右边，可以不加括号
    * 与Iterator接口的关系
* 2.next方法的参数
    * next可以带一个参数，该参数被当作上一个yield表达式的返回值（./demo/Genertor.next.js）
* 3.for...of循环
    * 可以自动遍历Generator函数生成的Iterator对象，此时不需要再调用next方法，一旦遇到return就直接跳出，不会获取return的返回值(./demo/Generator.obj.ergodic.js)
* 4.Generator.prototype.throw()
    * 可以在函数体外抛出错误，然后再Generator函数体内捕获
    * throw方法接收一个参数，该参数会被catch语句接收
    * Generator内部和外部都没有try...catch代码块，程序将报错，中断执行
    * throw方法捕获后，附带执行一次next方法（./demo/Generator.throw.study.js）
    * 一旦Genterator执行过程中抛出错误，没有在内部捕获，就不在执行下去
* 5.Generator.prototype.return()
    * 给定返回的值，并且终结Generator函数，不传参数返回值为underined
    * 如果函数体内有try...finally，return会延迟到finaly执行完；(./demo/Generator.return.study.js)
* 6.yield* 表达式
    * 在Genterator内部调用一个另一个Genterator函数需要用yield*（./demo/Generator.yield.js）
* 7.作为对象属性的Generator函数
    ```text
    let obj = {
        * gen0 (){},
        gen1: function* (){}
    }
    ```
* 8.Generator函数的this(./demo/Generator.this.js)
    * Generator函数返回一个遍历器，是Generator函数的实例，继承了Genterator上的prototype上的实例
    * Generator返回的遍历器对象，不是this对象
    * 不能跟new命令一起使用
* 9.含义
    * Generator与状态机
    ```text
    function *status(){
        while(true) {
            console.log("Tick");
            yield;
            console.log("Tock");
            yield;
        }
    }
    ```
    * Generator与协程
        * 可以并行执行、交换执行权的线程（或函数），就称为协程
* 10.应用
    * （1）异步操作的同步化表示
    * （2）控制流管理、
    * （3）部署Iterator接口
    * （4）作为数据结构
### Generator函数的异步应用
* Thunk函数的含义（传名函数）
```text
var thunk = function () {
    return x + 5;
}
function f(thunk) {
    return thunk() * 2;
}
```
* javascript语言是传值调用，Thunk将多参数函数，将其替换成一个只接收回调函数作为参数的单调函数。
```
// 正常版本的readFile（多参数版本）
fs.readFile(fileName, callback);

// Thunk版本的readFile（单参数版本）
var Thunk = function (fileName) {
  return function (callback) {
    return fs.readFile(fileName, callback);
  };
};

var readFileThunk = Thunk(fileName);
readFileThunk(callback);
```
* Thunk函数自动管理流程（./demo/Thunk.generator.js）
* co模块（用于Generator函数的自动执行）
* 基于Promise对象的自动执行
* 处理并发的异步操作
* 处理Stream
### async函数
* 1.含义
    * async是Generator函数的语法糖，并做了改进
        * 内置执行器
        * 更好的语义
        * 更广的适用性
        * 返回值是Promise
* 2.基本用法(./demo/async.start.js)
* 3.语法(./demo/async.start.js)
    * 返回Promise对象
    * Promise对象的状态变化，async返回的Promise,除return和抛出错误外，await全部执行完才会改变状态机制
    * 如果await后面的Promise状态为Promise.reject,且没有对代码块做处理，则整个asyn函数都会中断执行(./demo/async.await.reject.js)
    * 错误处理
    * 注意事项
        * 如果异步操作不存在继发关系，用同事触发
        * await只用在async函数中，用在普通函数中会报错
        * 把forEach参数改为async也会出现问题
* 4.async函数的实现原理
* 5.按顺序完成异步操作
* 6.异步遍历器[提案]
### Class的基本语法
* 1.简介(./demo/Class.define.start.js)
    * ES6的类可以看做构造函数的另一种写法
    * 方法名之间不能打空格
    * 类的所有方法都定义在类的prototye属性上
    * 可以利用Object.assign向类添加方法
    * 类的所有内部定义的方法都是不可以枚举的
    * 类的属性名可以用表达式
* 2.严格模式
    默认就是严格模式
* 3.constructor方法
    * 类的默认方式，如果没有显示定义，会添加一个空的contructor
    * constructor方法默认返回实例对象（this）,可以指定返回另一个对象
    * 类必须用new调用
* 4.类的实例对象
    * 与ES5一样，类的所有实例共享一个原型对象
* 5.Class表达式
* 6.不存在变量提升
    * 类不存在变量提升
* 7.私有方法
    * 命名上加以区别
    * 将私有方法移除模块
    * 利用Symbol值得唯一性，将室友方法的名字命名为一个Symbol值
* 8.私有属性[提案]
    * ES6不支持私有属性
* 9.this的指向
    * 类的方法内部如果含有this，默认指向类的实例
* 10.name属性
* 11.Class的取值函数getter和存值函数setter
    * 对某个属性设置存值函数和取值函数，拦截属性的存取行为
* 12.Class的Genterator方法
* 13.Class的静态方法
    * 在一个方法前加上static关键字，就不会被实例继承，直接通过类来调用
    * 父类的静态方法可以被子类继承
* 14.Class的静态属性和实例属性[提案]
    * 静态属性的this绑定类而不是绑定实例
* 15.new.target属性(./demo/Class.new.target.js)
    * 检测构造函数是不是由new调用的
    * 子类的new.target等于子类
### Class的继承
* 1.简介(./demo/Class.extend.start.js)
    * 通过extends关键字实现继承
    * 子类必须在constructor使用super()关键字，否则构建实例的时候会报错
    * 在子类构造函数，只有咋调用super后才能使用this关键字
* 2.Object.getPrototypeOf()
    * 用来从子类上获取父类
* 3.super关键字
    * super代表父类，this指向子类
    * super必须在constructor上生命
    * 可以在函数中调用super
* 4.类的prototype属性和__proto__属性
    * 子类的__proto__属性，表示构造函数的继承，总是指向父类
    * 子类的prototype.__proto__指向父类的prototye
    * extends的继承目标
        * extends关键字后面可以跟多种类型的值（可以继承任意函数）
        * 子类继承Object类
        * 不存在任何继承
        * 子类继承null(跟不继承一样)
    * 实例的__proto__属性
        * 子类实例的__proto__属性指向父类的实例的__proto__属性，子类原形的原形是父类的原形
* 5.原生构造函数的继承
* 6.Mixin模式的实现(./demo/Class.mixin.js)
    * 将多个类的接口混入到另一个类
### 修饰器[提案]
### Module的语法
* 1.概述
    * import是编译时加载(静态加载)效率更高，扩展性更强，CommonJS是运行时加载；
* 2.严格模式
    * ES6模块自动采用严格模式
        * 变量必须声明后再使用
        * 函数的参数不能有同名属性，否则报错
        * 不能使用with语句
        * 不能对只读属性赋值，否则报错
        * 不能使用前缀0表示八进制数，否则报错
        * 不能删除不可删除的属性，否则报错
        * 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
        * eval不会在它的外层作用域引入变量
        * eval和arguments不能被重新赋值
        * arguments不会自动反映函数参数的变化
        * 不能使用arguments.callee
        * 不能使用arguments.caller
        * 禁止this指向全局对象
        * 不能使用fn.caller和fn.arguments获取函数调用的堆栈
        * 增加了保留字（比如protected、static和interface）
* 3.export命令
    * 模块实现主要由两个命令组成：export规定模块对外的接口，import引入其他模块的功能
    * 一个文件是一个独立的模块，只能通过export输出变量，否则无法访问该模块的变量
    * export可以用as对输出变量本来的名字就行重命名
    ```text
    let a = 2;
    export {
        a as varA
    }
    ```
    * export只能处于模块的顶层
* 4.import命令
    * import可以用as将输入的变量重命名
    * .js可以省略
    * import有提升效果，优先执行
    * import不能使用表达式和变量
* 5.模块的整体加载
    * 用*号指定一个对象，所有输出值都加载在这个对象上面
    ```text
    import * as obj form "module";
    ```
* 6.export default命令
    * 用于设置模块的默认输出
    * import后面不用加大括号，切名字随意
    * 一个模块只能有一个默认输出