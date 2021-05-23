# Git
## branch
Mỗi nhánh (branch) tương ứng với 1 hướng phát triển độc lập
- Push code lên branch này thì branch kia không thay đổi theo

## status
Kiểm tra trạng thái của repository

## checkout
Đổi sang 1 hướng làm việc khác
- Có thể checkout sang branch khác
- Checkout sang commit khác

Checkout -f
- Quay lại commit gần nhất
- Xóa những cái đang thay đổi

Checkout -b
- Tạo branch mới và chuyển sang branch đó

## log
Show history commit của tất cả commit có trong local

## reset
Quay về commit cũ

Reset --hard
- Quay lại commit cũ + xóa tất cả thay đổi

Reset --soft
- Quay lại commit cũ + giữ lại các thay đổi

## merge
Merge để ghép 2 luồng khác nhau history

Nếu cùng 1 branch, nhưng nếu có thằng push lên web github làm thay đổi history
- Phải merge code trên web với local để đồng bộ history rồi chính mình mới push lên được

Merge branch khác vào branch hiện tại để lấy code + history của branch đó

## pull request
Tương đương với merge 2 branch
- UI thuận tiện cho việc so sánh 2 branch
- Nêu được mục tiêu merge

## gitignore
Khai báo để git bỏ qua khi check change

# JS core
## Programming Language type
Loosely typing 
- không khai báo cụ thể kiểu biến

Dynamically typed 
- Một ngôn ngữ thuộc kiểu dynamically typed là ngôn ngữ có type được nhận biết trong quá trình runtime.
```
var a = 1 // int
var b = 'test' // string
```

Weakly typed
- Một ngôn ngữ thuộc kiểu weakly typed là ngôn ngữ mà type a có thể được suy ra từ một type khác.
```
- 1 + '2' // '12'
```

## Datatype
Primary
- mỗi lần biến sẽ được khai báo vào được 1 ô nhớ mới
    - string
    - number
    - boolean

Reference
- Assign lầu đầu sẽ tạo 1 ô nhớ mới trong bộ nhớ, assign những lần sau sẽ sửa vào ô nhớ đã tạo từ lần đầu
    - object
    - array
    - function
    - null
    - undefined

## Falsy and Truthy
falsy -> if sai
- 0
- -0
- false
- null
- undefined
- “" (length = 0)
- NaN

truthy -> if đúng
- tất cả không phải falsy

== là so sánh bằng nhưng có ép type
- không bằng là !=

=== là so sánh bằng nhưng ko ép kiểu
- không bằng là !==

\> là lớn hơn
- \>= là lớn hơn hoặc bằng

< là nhỏ hơn
- <= là nhỏ hơn hoặc bằng

## Function
### Basic
function là reference datatype trong js
```
function a({}
var b = a;
console.log(typeof b); //function
```

khai báo function
- declaction function
```
function foo({...}
```
- expression function
```
var foo = function({...}
```

**this** trong function = context mà nó đc gọi
- Context là object mà function thuộc về
```
var a = {
    name: "Duy",
    age: 21,
    showInfor: function({
        console.log(this); // 'this' thay thế  cho a
    }
}
```

- Nếu function đc khai báo cục bộ =auto=> context = Window
```
var a = {
    func: function({
        function func2({
            console.log(this); // 'this' thay thế  cho 'Window'
        }
        func2();
    }
}
```
### Callback
callback là một function truyền vào 1 function khác như 1 argument
- Function kia có thể  gọi callback function bên trong scope của mình
```
function sayHello({
    console.log('hello world');
}
function demoFunc(callback{
    callback();
}
demoFunc(sayHello); //hello world
```

### Arrow function
Arrow function dùng để viết tắt
```
var a = function(...arg) {...}
var a = (...arg) => {...}
```
```
var a = function(...arg) {
    return result
}
var a = (...arg) => result
```

Arrow function không có this như function thường => this sẽ là context gần nhất
```
var adder = {
    base: 0;

    builder: function(a) {
        this.base = a;
        var f = v => v + this.base; //context gần nhất là adder
        return f;
    }
};

var add = adder.builder(10);

console.log(add);
console.log(add(5));
``` 

## Array
### push
Đẩy vào cuối của array

### forEach
Thực hiện cùng 1 function với mỗi element trong array

### map
Tạo ra 1 mảng mới = cách biến đổi từng phần tử của mảng cũ
- arayMới.length = arrayCũ.length

### filter
Tạo ra 1 mảng mới = cách lọc các phần tử trong mảng cũ
- arayMới.length >= arrayCũ.length
- element trong mảng mới không đổi so với mảng cũ

### splice
Thay thế hoặc chèn elements vào mảng

### slice

### sort
Sort array = cách chuyền 1 function để so sảnh 2 element trong mảng

### reverse
### reduce

## Destructuring
unpack values from arrays, or properties from objects
```
var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
/*
    a = 10
    b = 20
    rest = [30, 40, 50]
*/
var person = {name: "Duy", age: 21}; 
var {name, age} = person;
/*
    name = "Duy"
    age = 21
*/
```

## Spread syntax 
gộp các element thành 1 array
```
var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
/*
    rest = [30, 40, 50]
*/
function demo(a, b, ...rest{...}
demo(10, 20, 30, 40, 50);
/*
    rest = [30, 40, 50]
*/
```
trải elements của 1 array vào 1 array khác
```
var x = [1, 2, 3]
var y = [4, 5, ...x] // [4, 5, 1, 2, 3]
```
trải properties của obj cho 1 obj khác
```
var person = {name: "Duy", age: 21}; 
var student = {...person, job: 'student'} //{name: "Duy", age: 21, job: "student"}
```

## template literal
để string vào backtick : 
```
`string`
```

lưu cả xuống dòng, tab của string trong code
```
var x = `string 1
        string 2`
/*
"string 1
        string 2"
*/
```
truyền biến vào string
```
var x = 'world'
var hello = `hello ${x}` //hello world
```

## Closure
### scope
global
- defind bên ngòai document

function
- Mỗi lần call function => tạo mới 1 scope của function
- => mỗi lần call = 1 lần tạo mới local var
    - local var chỉ được sử dụng trong scope của function
- khi function finished the execution 
    - khi return
    - destroy scope
        - garbage colleciton = auto xóa bởi máy ảo (giống java)
- inner
- child function

### closure
là 1 (nestedchild function refer tới var của parent function
- Khi scope của parent func xóa 
- => var đc closure refer của parent func sẽ ko bị garbage collected

### Builder Pattern
```
function buildAdder(x{
    var accumlator = x;

    return function(y{
        return accumlator += y;
    }
}

var adder = buildAdder(1);
adder(2);   //  3
adder(3);   //  6
adder(4);   //  10
```

### Stimulate Class
```
var newPerson = function(name{
    var _name = name;
    return {
        setName: function(name{
            _name = name;
        },
        getName: function({
            return _name;
        },
        sayHi: function({
            console.log('Hi, I\'m ' + _name);
        }
    }
}

var person1 = newPerson('Person 1');
person1.sayHi();

var person2 = newPerson('Person 2');
person2.sayHi();
```

## Promise
`Promise` là 1 object bao gồm trạng thái cuối cùng (có thể là lỗicủa một method không đồng bộ và kết quả của method đó.
- `Promise` là proxy for a value không cần biết khi khởi tạo, liên kết các quá trình sử lý không đồng nhất để trả về success value or failure reason. 
- This lets asynchronous methods return values like synchronous methods.
    - Instead of immediately returning the final value, the asynchronous method returns a `Promise` to supply the value at some point in the future.
- `Callback` là một đoạn mã thực thi đại diện cho một asynchronous method được truyền như một paramester vào một method sẽ được thực hiện để có thể gọi lại call asynchronous method back. Quá trình này kéo dài tới khi asynchronous method dừng.

Constructor của Promise dùng để wrap method chưa hỗ trợ promise.
```
new Promisefunction executor (resolve, reject{...} );
```
- Function truyền vào Promise là executor. Function này được executed trước cả Promise constructor.
- The executor normally initiates some asynchronous work for main function, and then, once that completes, it will call resolve or reject.
- `resolve` và `reject` là các function sẽ được gọi tương ứng với trạng thái của main function.
    - `resolve` resolve the promise when main function run successfully.
    - `reject` returning value if error occurred. If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

Promise có 3 states
- *pending*: initial state, neither fulfilled nor rejected.
- *fulfilled*: meaning that the operation completed successfully.
- *rejected*: meaning that the operation failed.
![PromiseState](PromiseState.png)

### `Promise.then`
The `then()` method returns a `Promise`. 
- It takes up to two arguments: callback functions for the success and failure cases of the `Promise`.
```
p.then(
  (value=> {
    // sử lý value nếu success
  }, 
  (error=> {
    //sử lý error
  }
);
```
- Nếu chỉ truyền vào then(1 function đó tự động là fullfill function, function này chỉ chạy khi Promise is fulfilled.
- Một khi Promise được xử lý xong(success hoặc error), nó sẽ gọi hàm sử lý (onFulfilled  or onRejecteddưới dạng asynchronous (scheduled in the current thread loop).

Khi handle function : 
- <ins>returns a value</ins>, the `Promise` returned by `then()` gets resolved with the returned value as its value;
- <ins>doesn't return anything</ins>, the `Promise` returned by `then()` gets resolved with an `undefined`value;
- <ins>throws an error</ins>, the `Promise` returned by `then()` gets rejected with the thrown error as its value;
- <ins>returns an already resolved `Promise`</ins>, the `Promise` returned by `then()` gets resolved with that promise's value as its value;
- <ins>returns an already rejected `Promise`</ins>, the `Promise` returned by `then()` gets rejected with that promise's value as its value;
- <ins>returns another pending `Promise` object</ins>, the resolution/rejection of the `Promise` returned by `then()` sẽ truyền cho `Promise` returned by handler. Also, the value of the `Promise` returned by `then()` will be the same as the value of the `Promise` returned by the handler.

### `Promise.catch`
The `catch()` method returns a `Promise` and deals with rejected cases only.
```
mainFunction.catch(function(error{
  //Sử lý error
})

mainFunction.catch(function(error{ ... }
//tương đương với
mainFunction.then(undifine, function(error{ ... })
```

### Promise.finally
The `finally()` method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

# Vue 3
## Basic
### setup
### ref
### event listener
### v-for
### v-if
## Component
### create component
### props
### emit

# Vue 2
## main property
### data
### methods
### computed
### watch
## lifecycle
## create
## mount
## update
## destroy

# Axios

# Vue Route

# Vuex
