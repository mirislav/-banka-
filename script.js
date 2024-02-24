const exchangeRates = {
    'CZK': { 'GBP': 0.03358, 'USD': 0.043, 'EUR': 0.038 },
    'GBP': { 'CZK': 29.78, 'USD': 1.28, 'EUR': 1.13 },
    'USD': { 'CZK': 23.26, 'GBP': 0.78, 'EUR': 0.88 },
    'EUR': { 'CZK': 26.33, 'GBP': 0.89, 'USD': 1.14 }
  };
  
  function convert() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var result = 0;
  
    if (fromCurrency !== toCurrency) {
      result = amount * exchangeRates[fromCurrency][toCurrency];
    } else {
      result = amount;
    }
  
    document.getElementById('result').innerText = `Výsledek: ${result.toFixed(2)} ${toCurrency}`;
  }


  let balance = 10000; // Původní zůstatek

  function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance;
  }

  function deposit() {
    const amount = parseInt(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalanceDisplay();
    }
  }

  function withdraw() {
    const amount = parseInt(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalanceDisplay();
    }
  }

  // Aktualizujte zobrazení zůstatku při načtení stránky
  updateBalanceDisplay();