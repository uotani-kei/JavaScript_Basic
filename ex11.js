let a = "あいうえお"
a{1}
a [1]
a [-1]
[1, 2, 3], ["abc", "cde", "efg"]
numbers = [1, 2, 3];
numbers[1]; 
numbers[2] = 6
numbers[5] = 9 
numbers.push(8)
numbers.pop()
numbers = [1, 2, 3];
chars = ["abc", "cde", "efg"];
new_array = [...numbers, ...chars];
num = [1,2,3,4]
ber = ['a','b','c']
abc = [true,false]
num.pop()
num
ber.pop()
ber
abc.pop()
abc
aaa = [...num, ...ber, ...abc]
{"id": 0, "name": "My Name", "own_car": true}
info = {"id": 0, "name": "My Name", "own_car": true};
info.id;
info["name"];
info.id = 5;
info["own_car"] = false;
info.age = 18 
"age" in info;
"parent" in info;
delete info.age;
"age" in info;
bbb = {"name":"user"}
ccc = {"pass":"0713"}
ddd = {...bbb, ...ccc}
const PI = 3.14
pi = 3.14
a = [1,2,3,4]
for (let b for a){}
a = [1,2,3,4]
for (let b for a){
if(a === 3){
console.log("aは3です。")
}
}

a = [1,2,3,4]
for (let b of a){
if(a === 3){
console.log("aは3です。")
}
}

a = [1,2,3,4]
for (let b of a){
if(b === 3){
console.log("bは3です。")
}
}

function ber(h,i){
return
h + i;
}

ber(1,2)
function ber(h,i){
return h + i;
}

ber(1,2)
const now = function(a,b){
return a+b;
}

now(100,100)
const moon = (a,b) =>{
return a+b;
}

moon(15,35)
const myerror = Error("This is My Error");
throw myerror;
try{
throw myerror;
}catch(e){
console.log(e);
}finally{
console.log('後処理');
}
const myerror = Error("This is My Error");
try{
throw myerror;
}catch(e){
console.log(e);
}finally{
console.log('後処理');
}
try{
throw myerror;
}catch(e){
console.log(e);
}finally{
console.log('後処理');
}

class MyClass {
	constructor(size, age){
	this.size = size;
		this.age = age;
	}
	print_size(){
		console.log(this.size);
	}
	add_age(x){
		this.age += x;
	}
}


my_obj = new MyClass(160, 53);
my_obj.print_size()
my_obj.add_age(3)

let my_class = {
age: 53,
size: 160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}
my_class.add_age(4);
my_class.age;

let my_class = {
age: 53,
size: 160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}
my_class.add_age(4);
my_class.age;

let my_miss = {
age: 53,
size: 160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}
my_miss.add_age(4);
my_miss.age;
