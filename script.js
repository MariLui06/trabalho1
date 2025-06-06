const apiKey = "02c5af7c0e515e89910ce73a153ea007";
const cidade = "Belém"; 

async function pegarClima() {
 try {
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`;
 const resposta = await fetch(url);
 const dados = await resposta.json(); 

 const temperatura = dados.main.temp;
 const umidade = dados.main.humidity;
 const vento = dados.wind.speed;
 const descricao = dados.weather[0].description; 

 document.getElementById("temperature").innerHTML =
 `<strong>Temperatura:</strong> ${temperatura.toFixed(1)}°C<br>`;
 document.getElementById("humidity").innerHTML =
 `<strong>Umidade:</strong> ${umidade}%<br>`;
 document.getElementById("wind").innerHTML =
 `<strong>Vento:</strong> ${vento} m/s<br>`;
 document.getElementById("description").innerHTML =
 `<strong>Condição:</strong> ${descricao}`;
 } catch (erro) {
 document.getElementById("temperature").textContent = "Erro ao carregar clima";
 }
} 

pegarClima();


