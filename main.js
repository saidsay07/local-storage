const number = 42

// Добавляет
localStorage.setItem("number", number.toString())
// Ищит
localStorage.getItem("number")
// Удаляет
localStorage.removeItem("number")
// Очищает
localStorage.clear()

// task
const person = {
    name: "Said",
    age: 15,
    job: "Frontend"
}
// Добавляю  в localStorage
localStorage.setItem("person", JSON.stringify(person))
// Достаю из localStorage
const localPerson = JSON.parse(localStorage.getItem("person"))
// Изменяю
localPerson.age = 16
delete localPerson.job
// Добавляю  в localStorage
localStorage.setItem("person", JSON.stringify(localPerson))