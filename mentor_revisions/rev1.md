[Роман Базов](/u/bazoff) 04 дек., 19:23

Привет! Нужно немного заняться рефакторингом.

В README нужно добавить требования к версиям языков и утилит используемых в проекте, а также туда нужно добавить инструкцию по разворачиванию проекта.

[Тут](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L41) и в остальных играх нужно переименовать эти функции, так как название функций должно начинаться с глагола.

Функции [getRandomInt](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/index.js#L3) и [getRandomIntInRange](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/index.js#L7) лучше объединить и добавить к параметрам значения по умолчанию.

[Тут](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L13) и в остальных играх нужно переименовать эти функции, так как они генерируют не только вопрос, но и корректный ответ.

[Тут](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L42) и в остальных играх нужно переименовать эту переменную, так как множественное число обычно используется для записи массивов, а в данном случае у нас одна строка.

[Эти](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/index.js#L18) параметры функции нужно переименовать в соответствии с предыдущими комментариями.

[Это](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/index.js#L36) условие можно вынести за цикл, чтобы не проверять его каждую итерацию цикла. При этом нужно не забыть вместо прерывания цикла с помощью [break](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/index.js#L31) заменить на return, чтобы функция завершала свое исполнение полностью

В [этой](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L3) функции можно использовать тернарный оператор для условной инструкции. А также в этой функции в целом нет необходимости. Ну и там присутствует параметр operation, который нужно переименовать, так как это не оператор, а индекс.

Вот [тут](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L15) соответственно лучше брать именно сам оператор, посредством обращения к элементу массива исходя из длины массива с операторами. А то в данном случае 1 и 3 это магические числа.

[Вычисление результата](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/calc.js#L22) лучше вынести в отдельную функцию и также в switch использовать не индекс массива с операторами, а сам оператор и в default лучше выбрасывать исключение для улучшения семантичности.

[Вычисление четности](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/even.js#L8) лучше вынести в отдельную функцию и использовать тернарный оператор для этого.

[Вычисление GCD](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/gcd.js#L9) тоже нужно вынести в отдельную функцию.

[Эту](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/prime.js#L20) переменную можно сделать const и, используя тернарный оператор, сразу добавить ей значение.

[Тут](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/progression.js#L4) 5 и 11 это магические числа.

[Подготовку](https://github.com/AlexanderRyzhov/frontend-project-44/blob/2785f60d3bb2dcdb8f259103617554e6014fc8c1/src/games/progression.js#L16) прогрессии можно вынести в отдельную функцию.