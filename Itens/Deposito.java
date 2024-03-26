package Itens;

import java.util.ArrayList;

public class Deposito {

	 ArrayList<Produto> produtos = new ArrayList<>();

public void adicionarProduto(Produto produto) {
    produtos.add(produto);
}
public void removerProduto(Produto produto) {
    produtos.remove(produto);
}
public int informarQuantidadeProdutos() {
    return produtos.size();
}
public boolean depositoEstaVazio() {
    return produtos.isEmpty();
}
}