function btc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())

  .then(btcJson => {
    document.body.innerHTML = `1 BTC equivale a R$${(btcJson.BRL.buy).toFixed(2)}`
  })
}

setInterval(btc, 1000)

btc()