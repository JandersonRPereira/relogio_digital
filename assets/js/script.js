const horas = document.getElementById('horas');
console.log('horas', horas)
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio  = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    horas.textContent = dateToday.getHours(); //hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    
});


function atualizarRelogio() {
    // Cria um novo objeto Date para obter a data e hora atuais
    const agora = new Date();

    // Extrai as horas, minutos e segundos
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Constrói a string do horário no formato HH:MM:SS
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;

    // Atualiza o conteúdo do elemento HTML com o ID "relogio"
    document.getElementById('relogio2').textContent = horarioFormatado;
}

// Chama a função pela primeira vez para evitar um atraso inicial
atualizarRelogio();

// Atualiza o relógio a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);