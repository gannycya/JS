//ProbabilityTheory
// 1 крок - написала функцію з отримання рандомних чисел (як на уроці)
function getRandom(min, max) {
    return Math. floor (Math. random () * (max - min + 1)) + min;
};

//console.log(getRandom(100, 1000)); //перевіряла, чи виводиться рандомне число

// 2 крок - написала функцію,яка рахує кількість парних і непарних чисел при 
// заданій кількості спроб

function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;
  
    for (let i = 0; i < count; i++) {
      const num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      if (num % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  
    // Повертаємо результат 
    return { even, odd };
  }
  
  //3 крок — логіка обрахування відсотків
  const count = 100000; // можу змінити на будь-яке число
  const result = checkProbabilityTheory(count);
  
  // Рахуємо відсотки
  const evenPercent = ((result.even / count) * 100).toFixed(2);
  const oddPercent = ((result.odd / count) * 100).toFixed(2);
  
  // Виводимо
  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", result.even);
  console.log("Непарних чисел:", result.odd);
  console.log(`Відсоток парних: ${evenPercent}%`);
  console.log(`Відсоток непарних: ${oddPercent}%`);
  