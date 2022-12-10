# Brain-games 

Учебный проект, в рамках которого реализуется несколько консольных игрб написанных на javaScript.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/AlexanderRyzhov/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/AlexanderRyzhov/frontend-project-44/actions)

### CodeClimate maintainability status:

# Системеые требования

- [Node.js](https://nodejs.org/en/) версии >= 13 - это платформа с открытым исходным кодом для работы с языком JavaScript, построенная на движке Chrome V8. Она позволяет писать серверный код для веб-приложений и динамических веб-страниц, а также программ командной строки.
- [readline-sync версии >= 1.4.10](https://github.com/anseki/readline-sync) - библиотека для чтения пользовательского ввода,

для разрабтки используются следующие утилиты и сервисы:

- утилита `make` и `Makefile`
- [Eslint](https://eslint.org/) - программа, отвечающие за проверку кода на соответствие стандартам + стандарт [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [CodeClimate](https://codeclimate.com/) - онлайн-сервис оценки качества кода

# Инструкция по разворачиванию проекта

- склонировать репозиторий проекта
- в дирректории проекта запустить команду `make insall` для установки зависимостей
- установить пакет в систему с помощью `npm link`, может потребовать запуск с `sudo`
- убедиться в том, что проект развернут успешно, запустив `brain-games` в терминале


# Описание игр

## brain-even (игра: "Проверка на чётность")

Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:
```
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
```
В случае, если пользователь ввел верный ответ, нужно отобразить:
```
Correct!
```
и приступить к следующему числу.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
```
Congratulations, Bill!
```
Вывод должен получиться следующий:
```
brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
```
- Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.

Аскинема с примером установки пакета, запуска игры, победой и поражением игрока:

[![asciicast](https://asciinema.org/a/fp8U3Yms4AEMKOXiEjwTFUNVp.svg)](https://asciinema.org/a/fp8U3Yms4AEMKOXiEjwTFUNVp)

## brain-calc (игра: "Калькулятор")

Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Вывод должен получиться следующий:
```
brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
- Достаточно реализовать следующие операции: +, - и *.
- Операции, как и числа, выбираются случайным образом.
В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```
и завершить игру.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
```
Congratulations, Sam!
```
Аскинема с примером запуска игры, победой и поражением игрока:

[![asciicast](https://asciinema.org/a/pVlK0rjs0yBJgRWUuwvmiIdcH.svg)](https://asciinema.org/a/pVlK0rjs0yBJgRWUuwvmiIdcH)


## brain-gcd (игра: "Наибольший общий делитель (НОД)")

Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:

```
brain-gcd

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```

В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```

Аскинема с примером запуска игры, победой и поражением игрока:

[![asciicast](https://asciinema.org/a/eoVIdWQbEzlL2XqZV1hsH7q2q.svg)](https://asciinema.org/a/eoVIdWQbEzlL2XqZV1hsH7q2q)

## brain-progression (игра: "Арифметическая прогрессия")

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

- Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел
- Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)

Пример:

```
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```

Аскинема с примером запуска игры, победой и поражением игрока:

[![asciicast](https://asciinema.org/a/kBkvU1crUtlHuVFEV6UH5qsWt.svg)](https://asciinema.org/a/kBkvU1crUtlHuVFEV6UH5qsWt)

## brain-prime (игра: "Простое ли число?")

Пример:

```
brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```

Весь вывод и логика в случае правильного и неправильного ответа повторяют предыдущие шаги.

Аскинема с примером запуска игры, победой и поражением игрока:

[![asciicast](https://asciinema.org/a/a7STNWlz4KtPHO48TBsWhHXWR.svg)](https://asciinema.org/a/a7STNWlz4KtPHO48TBsWhHXWR)
