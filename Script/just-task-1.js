// Создать объект с методами, которые будут динамически генерировать DOM

var TestGenerator = {
  createHeader: function () {
    var header = document.createElement("header");
    var container = document.createElement("div");
    container.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    var col = document.createElement("div");
    col.className = "col-md-12 text-center";
    var h1 = document.createElement("h1");
    h1.textContent = "Тест по программированию";

    col.appendChild(h1);
    row.appendChild(col);
    container.appendChild(row);
    header.appendChild(container);
    document.body.appendChild(header);
  },

  createQuestions: function () {
    var container = document.createElement("div");
    container.className = "container";

    for (var i = 1; i <= 3; i++) {
      var row = document.createElement("div");
      row.className = "row";
      var col = document.createElement("div");
      col.className = "col-md-12";
      var h2 = document.createElement("h2");
      h2.textContent = "Вопрос №" + i;
      var ul = document.createElement("ul");
      ul.className = "list-unstyled";

      for (var j = 1; j <= 3; j++) {
        var li = document.createElement("li");
        var label = document.createElement("label");
        label.textContent = "Вариант ответа №" + j;
        var input = document.createElement("input");
        input.type = "checkbox";

        label.insertBefore(input, label.firstChild);
        li.appendChild(label);
        ul.appendChild(li);
      }

      col.appendChild(h2);
      col.appendChild(ul);
      row.appendChild(col);
      container.appendChild(row);
    }

    document.body.appendChild(container);
  },

  createButton: function () {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-primary center-block";
    button.textContent = "Проверить мои результаты";
    document.body.appendChild(button);
  },

  generateTest: function () {
    this.createHeader();
    this.createQuestions();
    this.createButton();
  },
};

// Генерируем тест
TestGenerator.generateTest();
