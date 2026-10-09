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