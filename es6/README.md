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
* String.raw()： 模板字符串的处理函数,返回一个斜杠都被转义的字符串，对应于替换变量后的模板字符串
    * 1.如果字符串的斜杠已经转义，则不做任何处理
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
    * Number.isFinite()用来检测一个数组是不是有限的
    * Number.isNaN()用来检查一个值是不是NaN
* Number.parseInt(),Number.parseFloat()
    * 将全局方法parseInt()和parseFloat()移植到Number对象上，行为完全保持不变
* Number.isInteger(): 用来判断一个值是否为整数
* Number.EPSILON: 新增的一个极小的常量，可以用来检查误差
* 安全整数喝Number,isSafeInteger()
    * ES6引入了Number.MAX_SAFF_INTEGER和Number.MIN_SAFF_INTEGER两个常量，用来表示整数范围的上下线
    * Number.isSafeInteger()用来判断一个整数是否在这个范围内
    