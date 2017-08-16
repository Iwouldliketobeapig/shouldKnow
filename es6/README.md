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
* 8.__proto__属性，Object.setPrototypeOf(),Object.getPrototypeOf()
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
    * Object.keys: 返回一个数组，成员是参数对象自身得（不含继承得）所有可遍历属性得建名
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
    * 解构赋值: 将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面
        ```text
        
        ```