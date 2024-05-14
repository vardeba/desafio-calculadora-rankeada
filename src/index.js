function descobreSaldoVitórias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function descobreNivel(saldoVitorias) {
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

function mostraMensagem() {
    let vitorias = parseInt(prompt("Informe o número de vitórias: "));
    let derrotas = parseInt(prompt("Informe o número de derrotas: "));

    let saldoVitorias = descobreSaldoVitórias(vitorias, derrotas);

    let rank = descobreNivel(saldoVitorias);

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`;
}

console.log(mostraMensagem());
