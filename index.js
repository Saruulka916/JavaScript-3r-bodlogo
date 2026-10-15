// const person = {
//   name: "Haliun",
//   age: 19,
//   isStudent: "Haliun, 19, suragch bish",
// };
// console.log(person);

// const fruits = ["Алим","Банана","Жүрж"]
// console.log(fruits);

// const person = {
//     name: "Ану",
//     age: "20"
// }
// console.log(person.name);

// const color = ["Улаан","Ногоон","Цэнхэр"]
// console.log(color[0]);

// const product = {
//     name: "Дэвтэр",
//     price: 2500
// }
// console.log(product["price"]);

// const students = ["Бат","Ану","Болд"]
// console.log(students[1]);

// const person = {
//     name: "Бат",
//     age: 18
// }
// console.log(`${person.name} ${person.age} настай`);

//-----------------
// const animals = ["Нохой","Муур","Туулай","Морь"]
// console.log(animals.length);

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers[numbers.length - 1]);

// const student =
// console.log(grade); !

// const fruits = ["Алим", "Банана", "Жүрж"];
// console.log(fruits[1]); // "Банана"
// fruits[2] = "Усан үзэм"

//-----------------
// const person = {
//   name: "Болд",
//   age: 17,
// }; true false
//-------------------
// const books = ["Математик","Англи хэл"]
// books.push("Программчлал")
// console.log(books);

// const student = {
//   name: "Ану",
//   age: 15,
// };

// student.grade = 9

// console.log(student);

// const player = {
//   name: "Тэмүүлэн",
//   score: 100,
// };
// if (player.score >= 100) {
//   const playerScore = player.score;
//   player.score = playerScore + 50;
// }
// console.log(player);

//---------------------
// const items = ["Дэвтэр", "Бал", "Баллуур"];
// const removedItem = items.pop("Баллуур");

// console.log(items, removedItem);

//--------------------
// const queue = ["Бат","Ану"]
// queue.unshift("Болд")
// console.log(queue);

//----------------
// const lamp = {
//   isOn: false,
// };
// if (lamp.isOn) {
//   lamp.isOn = false;
//   console.log("Гэрлийг унтраалаа");
// } else {
//   lamp.isOn = true;
//   console.log("Гэрлийг асаалаа");
// }

//------------------
// const queue = ["Болд","Бат","Ану"]
// const firstPerson = queue.shift("Болд")
// console.log(queue, firstPerson);

//-----------------
// const user = {
//   name: "Бат",
//   isVerified: true,
//   temporaryCode: "ABC123",
// };

// if (user.temporaryCode) {
//   user.temporaryCode = false;
//   console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// } else {
//   user.temporaryCode = true;
//   console.log(delete user.temporaryCode);
// }

//-------------------
// const product = {
//     name: "Дэвтэр",
//     price: 2500,
//     quanity: 4
// }
// console.log(product.price * product.quanity);

//------------------
// const rectangle = {
//     width: 5,
//     height: 8
// }
// console.log(rectangle.width, rectangle.height, rectangle.width * rectangle.height); asuuh

//---------------
// const scores = {
//     math: 80,
//     english: 90,
//     programming: 100
// }
// console.log(270 / 3);

//--------------
// const product = {
//     price: 50000,
//     discountPercent: 20
// }
// if (product.discountPercent > 0) {
//  product.finalPrice = product.price - (product.price * product.discountPercent / 100)
// } else{
//     product.finalPrice = product.price
// }
// console.log(product);

//---------------
// const account = {
//   owner: "Болд",
//   balance: 50000,
// };
// const withdrawAmount = 60000;
// if (account.balance >= withdrawAmount) {
//   const balance = account.balance;
//   account.balance = balance - withdrawAmount;
//   console.log("Гүйлгээ амжилттай");
// } else{
//     account.balance <= withdrawAmount
//     console.log("Үлдэгдэл хүрэлцэхгүй");

// }

//----------------
// const product = {
//   name: "Бал",
//   stock: 1,
// };

// const message = product.stock > 0 ? "Бэлэн байна" : "Дууссан";

// console.log(message);

//----------------
// const numbers = [15,25,10]
// const niilber = numbers[0] + numbers[1] + numbers[2]
// console.log(niilber);

//----------------
// const scores = [80, 90, 100]
// const niilber = scores[0] + scores[1] + scores[2]
// console.log(niilber / 3);

//-----------------
// const customer = {
//     money: 10000,
// }
// const product = {
//     price: 8000,
//     stock: 3
// }
// if (customer.money >= product.price ) {
//     product.stock >= 0
//     console.log("Авч болно");
// } else{
//     console.log("Авч болохгүй");

// }

//-----------------
// const student = {
//   name: "Сараа",
//   score: 85,
// };
// if (student.score >= 90) {
//   console.log("Маш сайн");
// }
// if (student.score >= 60 && student.score < 90) {
//   console.log("Тэнцсэн");
// } else {
//   console.log("Тэнцээгүй");
// }

//--------------
// const student = {
//   name: "Болд",
//   address: { city: "Улаанбаатар", district: "Хан-Уул" },
// };
// console.log(student.address.city);

//------------------
// const person = {
//   name: "Ану",
//   address: { city: "Улаанбаатар", district: "Баянзүрх" },
// };
// const islocal = false;
// if (islocal) {
//     console.log(person.address.district);
// } else{
//     console.log("Орон нутгийн оршин суугч");

// }

//------------------
// // const student = {
// //   name: "Бат",
// //   scores: { math: 70, english: 80 },
// // };
// // if (student.scores.math > 80) {
// //   const onoo = student.scores.math;
// //   student.scores.math = onoo + 10;
// // } else {
// //   console.log("Нэмэлт оноо шаардлагагүй");
// }

//---------------
// const names = ["Бат", "Ану"];

// [names[0], names[1]] = [names[1], names[0]];

// console.log(names);

//----------------------
// const fruits = ["Алим", "Банана", "Жүрж"]
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");

// } else {
//     console.log("Банана алга");

// }

//--------------------
// const students = ["Бат", "Ану", "Болд", "Сараа"];
// students[2];
// console.log(students.indexOf("Болд"));

//-------------------
// const order = {
//   product: { price: 5000, quantity: 3 },
//   delivery: { fee: 2500 },
// };
// const productTotal = order.product.price * order.product.quantity
// if (productTotal >= 20000) {
//     order.delivery.fee = 0
// }
// order.total = productTotal + order.delivery.fee
// console.log(order.total);

//----------------
// const user1 = {
//   name: "Болд",
//   age: 20,
// };
// const user2 = {
//   email: "bold@example.com",
//   city: "Улаанбаатар",
// };
// const niit = Object.assign({}, user1, user2);
// console.log(niit);

//-----------------
// const cart = []
// if (cart.length === 0) {
//     console.log("Сагс хоосон");
// } else{
//     console.log("Сагсанд бараа байна");

// }

//-----------------
// const numbers = [35, 20]
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// } else if (numbers[0] < numbers[1]) {
//     console.log(numbers[1]);
// } else{
//     console.log("Хоёр тоо тэнцүү");

// }
//-----------------
// const students = ["Бат", "Ану"]
// const newStudent = "Сараа"
// if (students.includes(newStudent)) {
//     console.log("Энэ нэр бүртгэлтэй байна");
// } else{
//     students.push(newStudent)
// }
// console.log(students);

//------------------
// const user1 = {
//   name: "Ану",
//   age: 18,
// };
// const user2 = {
//   email: "anu@example.com",
//   city: "Улаанбаатар"
// };
// const students = [user1,user2]
// console.log(students);

//------------------
// const groupA = ["Бат", "Ану"];
// const groupB = ["Болд", "Сараа"];
// const allStudents = groupA.concat(groupB);
// console.log(allStudents);

//------------------
// const original = [10,20,30]
// const copied = [original]
// copied[0] = 99
// console.log(copied,original)
// console.log(original);

//------------------
// const numbers = [10,20,30,40,50]
// const toonuud = [20, 30, 40]
// toonuud.slice([20, 30, 40])
// console.log(toonuud);

//------------------
// const user = {
//   name: "Сараа",
//   age: 22,
//   email: "saraa@example.com",
// };
// const profile = {
//   name: user.name,
//   age: user.age
// };
// profile.name = "Бат"
// console.log(profile.name);
// console.log(user.name);

//-----------------
// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"]
// colors.splice(1, 1)
// console.log(colors);

//---------------
// const days = ["Даваа", "Лхагва"]
// days.splice(1, 0, "Мягмар")
// console.log(days);

//--------------
// const words = ["Би", "JavaScript", "сурч", "байна."];
// console.log(words.join(" "));

//--------------
// const students = [
//   { name: "Бат", score: 75 },
//   { name: "Ану", score: 90 },
// ];
// if (students[0].score) {
//   const onoo = student.score;
//   sstudent[0].score= onoo + 10;

// } else if (students[1].score > 90) {
//     console.log("Ану маш сайн");
// } else{
//     console.log("Ану хичээгээрэй");

// }
