// Homework 5 content

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн"
  };
  
  services.фарбування = '1500 грн';
  services.манікюр = '800 грн';
  services.педикюр = '800 грн';
  services['нарощування вій'] = '2000 грн';
  
  // Метод для мінімальної ціни
  services.minPrice = function() {
    var prices = [];
    
    // Проходимо по кожній властивості об'єкта
    for (var key in this) {
      // Пропускаємо, якщо це не рядок (щоб не брати методи)
      if (typeof this[key] === 'string') {
        // Розбиваємо рядок по пробілу і беремо перше слово (число)
        var priceStr = this[key].split(' ')[0];
        // Перетворюємо на число
        var priceNum = parseInt(priceStr);
        // Додаємо в масив цін
        prices.push(priceNum);
      }
    }
    
    // Знаходимо мінімальне число
    var min = prices[0];
    for (var i = 1; i < prices.length; i++) {
      if (prices[i] < min) {
        min = prices[i];
      }
    }
    
    return min;
  };
  
  // Метод для максимальної ціни
  services.maxPrice = function() {
    var prices = [];
    for (var key in this) {
      if (typeof this[key] === 'string') {
        var priceStr = this[key].split(' ')[0];
        var priceNum = parseInt(priceStr);
        prices.push(priceNum);
      }
    }
    
    var max = prices[0];
    for (var i = 1; i < prices.length; i++) {
      if (prices[i] > max) {
        max = prices[i];
      }
    }
    
    return max;
  };
  
  // Метод для сумарної ціни
  services.price = function() {
    var sum = 0;
    for (var key in this) {
      if (typeof this[key] === 'string') {
        var priceStr = this[key].split(' ')[0];
        var priceNum = parseInt(priceStr);
        sum += priceNum;
      }
    }
    return sum;
  };
  
  console.log("Загальна ціна: " + services.price() + " грн");
  console.log("Мінімальна ціна: " + services.minPrice() + " грн");
  console.log("Максимальна ціна: " + services.maxPrice() + " грн");
  
  
