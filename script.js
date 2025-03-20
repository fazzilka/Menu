// script.js
document.addEventListener("mouseup", function (event) {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    let contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;

    // Обработка кнопки "Изменить с помощью LLM"
    document.getElementById("editWithLLM").onclick = function () {
      modifyTextWithLLM(selectedText);
      contextMenu.style.display = "none";
    };

    // Обработка кнопки "Сохранить в векторную БД"
    document.getElementById("saveToVectorDB").onclick = function () {
      saveToVectorDB(selectedText);
      contextMenu.style.display = "none";
    };

    // Обработка кнопки "Искать в векторной БД"
    document.getElementById("searchInVectorDB").onclick = function () {
      searchInVectorDB(selectedText);
      contextMenu.style.display = "none";
    };
  }
});

// Скрыть меню при клике вне его
document.addEventListener("mousedown", function (event) {
  let contextMenu = document.getElementById("contextMenu");
  if (event.target !== contextMenu && !contextMenu.contains(event.target)) {
    contextMenu.style.display = "none";
  }
});

// Функция для изменения текста с помощью LLM
function modifyTextWithLLM(text) {
  // Здесь можно вызвать API LLM для изменения текста
  console.log(`Изменение текста с помощью LLM: ${text}`);
  // Пример: заменить выделенный текст на результат от LLM
  let newText = prompt("Введите новый текст:", text);
  if (newText) {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
  }
}

// Функция для сохранения текста в векторную БД
function saveToVectorDB(text) {
  // Здесь можно вызвать API для сохранения текста в векторную БД
  console.log(`Сохранение текста в векторную БД: ${text}`);
}

// Функция для поиска в векторной БД
function searchInVectorDB(text) {
  // Здесь можно вызвать API для поиска в векторной БД
  console.log(`Поиск в векторной БД: ${text}`);
}
