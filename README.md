# Brain-games 

Учебный проект, в рамках которого реализуется несколько консольных игрб написанных на javaScript.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/AlexanderRyzhov/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/AlexanderRyzhov/frontend-project-44/actions)

### CodeClimate maintainability status:

[![Maintainability](https://api.codeclimate.com/v1/badges/0b8ba57676879b22cad7/maintainability)](https://codeclimate.com/github/AlexanderRyzhov/frontend-project-44/maintainability)

# Описание игр

## brain-even

Игру "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
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