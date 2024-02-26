"use strict";
document.addEventListener("DOMContentLoaded", function () {
    loadContent("header", "./components/_header.html");
    loadContent("advantages", "./components/_advantages.html");
    loadContent("footer", "./components/_footer.html");
})


// Этот скрипт выполняет асинхронную загрузку содержимого файла.
// elementId (идентификатор элемента, в который будет вставлен контент) 
// и contentFile (путь к файлу с контентом).
async function loadContent(elementId, contentFile) {
    try {
        const response = await fetch(contentFile); // Выполняем GET запрос
        if (!response.ok) { // Проверяем, успешно ли выполнился запрос
            throw new Error('Network response was not ok');
        }
        const data = await response.text(); // Получаем текст ответа
        document.getElementById(elementId).innerHTML = data; // Вставляем текст в указанный элемент
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}