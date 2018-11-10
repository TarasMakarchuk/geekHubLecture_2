'use strict';

/**
 * Кефа и первые шаги
 *
 * Кефа решил подзаработать денег, занимаясь различной деятельностью в интернете на протяжении ровно n дней.
 * Он знает, что в i-й день (1 ≤ i ≤ n) он заработает ai монет. Кефа любит прогресс,
 * поэтому он хочет узнать длину максимального неубывающего подотрезка в последовательности ai.
 * Напомним, что подотрезок последовательности — это её непрерывный фрагмент. Подотрезок чисел называется неубывающим,
 * если числа в нём следуют в порядке неубывания.
 *
 * Помогите Кефе справиться с этой задачей!
 *
 * Входные данные
 * Массив целых чисел a1,  a2,  ...,  an (1 ≤ ai ≤ 109).
 *
 * Выходные данныx
 * Верните единственное целое число — длину максимального неубывающего подотрезка последовательности a.
 */

var firstStepsTests = [
    {
        parameters: [[2, 2, 1, 3, 4, 1]],
        expectedResult: 3
    },
    {
        parameters: [[2, 2, 9]],
        expectedResult: 3
    }
];


function firstSteps(arr) {
    var counter = 1;
    var steps = 0;

    if (verifyNUmber() === true) {
        return nonDecrNumbers(arr);
    }

    function nonDecrNumbers(params) {
        for (let i = 0, a = 1; i < params.length; i++, a++) {
            if (params[i] <= params[a]) {
                counter++;
            } else {
                if (steps === 0 || counter > steps) {
                    steps = counter;
                    counter = 1;
                } else {
                    counter = 1;
                }
            }
        }
        return steps;
    }

    function verifyNUmber() {
        return arr.length >= 1 && arr.length <= 109;
    }
    return steps;
}

tasks.push({
    title: "Кефа и первые шаги",
    solution: firstSteps,
    tests: firstStepsTests
});

