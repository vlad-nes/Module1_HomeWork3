console.log(emplyeeArr);

// 1) Функция - конструктор
let Emploee = function(id, name, surname, salary, workExperience, isPrivileges, gender){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
  }
// Новый объект созданный функцией - конструктором
let emplyeeObj = new Emploee(0, 'Andrey', 'Kyzmichenko', 2000, 15, false, 'male');
console.log('1)',emplyeeObj);

// 2)Метод возвращает имя и фамилию
Emploee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`;
  };  
console.log('2)',emplyeeObj.getFullName());

// 3)Новый массив созданный функцией - конструктором
let emplyeeConstructArr = emplyeeArr.map(function (obj) { 
    return emplyeeObj = new Emploee(obj.id, obj.name, obj.surname, obj.salary, obj.workExperience, obj.isPrivileges, obj.gender)
  });
console.log('3)',emplyeeConstructArr);

// 4)функция возвращает массив со всеми полными именами
let getFullNamesFromArr = function(array) {
    let arrayName = [];
    for(i = 0; i < array.length; i++) {
        arrayName.push(array[i].getFullName())
    }
    return arrayName
};
   console.log('4)',getFullNamesFromArr(emplyeeConstructArr));

// 5)Функция вернет среднее значение зарплаты
let getMidleSalary = function(arr) { 
    let sumSalary = 0;
    for(let i = 0; i < arr.length; i++) {
        sumSalary += arr[i].salary;
    }
   return sumSalary / arr.length
}
console.log('5)',getMidleSalary(emplyeeConstructArr));

// 6)Функция рандом
let getRundomNumber = function() {
    return Math.floor(Math.random() * 11)
  };
  console.log('6)',getRundomNumber());

// Доп.задание
let getRandomNum = function(array) {
    return array[Math.floor(Math.random() * array.length)]
};
console.log('Доп.задание',getRandomNum(emplyeeConstructArr));

