const agora = new Date();
const diaHoje = agora.getDate();     // Ex: 15
const mesAtual = agora.getMonth();   // Ex: 9 (Outubro, indexado em 0)
const anoAtual = agora.getFullYear(); // Ex: 2026

// No loop que percorre cada venda realizada:
const d = new Date(v.data);

if (d.getDate() === diaHoje && d.getMonth() === mesAtual && d.getFullYear() === anoAtual) {
  vHoje += v.totalVenda;  // Soma o valor vendido hoje
  lHoje += v.lucroObtido; // Soma o lucro gerado hoje
}