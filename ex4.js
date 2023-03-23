const distanciaEntreCidades = 100; // em km
const distanciaPedagio = 20; // em km
const velocidadeCarro = 110; // em km/h
const velocidadeCaminhao = 80; // em km/h
const tempoPedagioCaminhao = 10/60; // em horas (5 minutos para cada pedágio)

// Calcula a distância total percorrida pelo carro até o encontro
const distanciaTotalCarro = distanciaEntreCidades + 2 * distanciaPedagio;

// Calcula o tempo que levará para os veículos se encontrarem
const tempoEncontro = distanciaTotalCarro / (velocidadeCarro + velocidadeCaminhao);

// Calcula a distância percorrida pelo carro até o encontro
const distanciaCarro = velocidadeCarro * tempoEncontro;

// Calcula a distância percorrida pelo caminhão até o encontro (considerando tempo adicional dos pedágios)
const distanciaCaminhao = (velocidadeCaminhao * (tempoEncontro + tempoPedagioCaminhao)) - (2 * distanciaPedagio);

// Verifica qual veículo está mais próximo de Ribeirão Preto
if (distanciaCarro < distanciaEntreCidades / 2) {
  console.log(`O carro está mais próximo de Ribeirão Preto, a ${distanciaCarro.toFixed(2)} km de distância.`);
} else {
  console.log(`O caminhão está mais próximo de Ribeirão Preto, a ${distanciaCaminhao.toFixed(2)} km de distância.`);
}
