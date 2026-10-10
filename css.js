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

package com.pdv.controller;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

// 1. O @RestController indica ao Java que esta classe vai responder a pedidos vindo da Web (do nosso HTML/JS)
@RestController
@RequestMapping("/api/vendas")
@CrossOrigin(origins = "*") // Permite que o telemóvel e o computador se conectem
public class VendaController {

    // Lista em memória no servidor Java para armazenar as vendas
    private List<Venda> listaVendas = new ArrayList<>();

    // 2. Método POST: O JavaScript envia uma nova venda e o Java ACRESCENTA à lista
    @PostMapping
    public String registrarVenda(@RequestBody Venda novaVenda) {
        listaVendas.add(novaVenda);
        System.out.println("Venda registrada no servidor Java com sucesso!");
        return "Venda salva no servidor com sucesso!";
    }

    // 3. Método GET: O computador ou telemóvel pede a lista de vendas ao Java
    @GetMapping
    public List<Venda> listarVendas() {
        return listaVendas;
    }
}

// Classe de modelo que define como uma Venda é estruturada dentro do Java
class Venda {
    public double totalVenda;
    public double lucroObtido;
    public String formaPagamento;
    public String data;
}

for (let mes = 0; mes < 12; mes++) {
  vendasSimuladas.push({
    id: Date.now() + (mes * 100),
    data: new Date(2026, mes, 10, 14, 30).toISOString(),
    totalVenda: 150 + (mes * 20),
    totalCusto: 90 + (mes * 10),
    lucroObtido: 60 + (mes * 10)
  });
}

// Se o cliente NÃO for ilimitado, verifica se ultrapassou
if (!cli.limiteIlimitado && ((cli.saldoDevedor + totalVenda) > cli.limite)) {
  return alert('Venda Recusada! A compra ultrapassa o limite de crédito do cliente.');
}

vendas = vendas.filter(v => v.id !== idVenda);
localStorage.setItem('pdv_vendas', JSON.stringify(vendas));

const telefoneInput = document.getElementById('cliTelefone').value.trim();
const limiteInput = document.getElementById('cliLimite').value;

// Se estiver vazio, define texto "Não informado" ou valor R$ 0.00
const telefone = telefoneInput !== "" ? telefoneInput : "Não informado";
const limite = ilimitado ? 0 : (limiteInput !== "" ? parseFloat(limiteInput) : 0);
function renderizarTabelaAbaVendas() {
  // Percorre e desenha cada venda com o botão Excluir associado ao seu ID único
}
const totalAReceber = clientes.reduce((acc, cli) => acc + (cli.saldoDevedor || 0), 0);
document.getElementById('relTotalAReceber').innerText = totalAReceber.toFixed(2);

let rotuloForma = 'À Vista (Dinheiro)';
if (formaSelec === 'vista_pix') rotuloForma = 'À Vista (PIX)';
if (formaSelec === 'vista_cartao') rotuloForma = 'À Vista (Cartão)';

function renderizarTabelaUsuarios() {
  const tbody = document.getElementById('tabelaAbaUsuarios');
  // Atualiza a quantidade de contas registradas
  document.getElementById('qtdTotalUsuarios').innerText = contasRegistradas.length;
  tbody.innerHTML = '';

  contasRegistradas.forEach(conta => {
    const eAdmin = conta.perfil === 'admin';
    // Cria um visual diferenciado para Administrador e Vendedor
    const badgePerfil = eAdmin 
      ? `<span class="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">👑 Administrador</span>`
      : `<span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">👤 Vendedor</span>`;

    tbody.innerHTML += `
      <tr class="border-b text-sm hover:bg-gray-50">
        <td class="p-3 font-semibold text-gray-800">${conta.usuario}</td>
        <td class="p-3">${badgePerfil}</td>
        <td class="p-3 text-center"><span class="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">Ativo</span></td>
      </tr>`;
  });
}
  const itensComprados = carrinho.map(i => ({ id: i.id, nome: i.nome, qtd: i.qtd }));
  venda.itens.forEach(item => {
  const prod = produtos.find(p => p.id === item.id);
  if (prod) {
    prod.estoque += item.qtd; // Devolve ao estoque
  }
});

if (formaSelec === 'vista_dinheiro') {
  caixa.dinheiro += totalVenda;
  caixa.entradas += totalVenda;
} else if (formaSelec === 'vista_pix') {
  caixa.pix += totalVenda;
  caixa.entradas += totalVenda;
} ...

if (venda.tipoPagamento === 'vista_dinheiro') {
  caixa.dinheiro = Math.max(0, caixa.dinheiro - venda.totalVenda);
  caixa.entradas = Math.max(0, caixa.entradas - venda.totalVenda);
}
  let contasRegistradas = JSON.parse(localStorage.getItem('pdv_contas')) || [
  { usuario: 'master', senha: '123', perfil: 'superadmin', lojaId: null }
];