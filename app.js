const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("username").innerText =
  tg.initDataUnsafe?.user?.first_name
    ? `👋 ${tg.initDataUnsafe.user.first_name}`
    : "Connected";

function send(action, payload = {}) {
  tg.sendData(JSON.stringify({ action, ...payload }));
}

function trade(amount) {
  const market = document.getElementById("market").value;
  send("trade", { amount, market });
}

function toggleTheme() {
  const body = document.body;
  body.dataset.theme =
    body.dataset.theme === "dark" ? "light" : "dark";
}

function updateWallet(address, balance) {
  document.getElementById("wallet-address").innerText = address;
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("qr").src =
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}`;
}

function addHistory(entry) {
  const li = document.createElement("li");
  li.innerText = entry;
  document.getElementById("history").prepend(li);
}