package Lp2_Aula09.Itens;

import java.util.ArrayList;

public class Deposito {

	private ArrayList<Produto> produtos = new ArrayList<>();

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
public Produto maisCaro() {
	Produto p = null;
	if (produtos.size() > 0) {
		double maior = 0;
		for(int i = 0; i < produtos.size(); i++) {
			if(produtos.get(i).getPreco() >= maior) {
				p = produtos.get(i);
				maior = p.getPreco();
			}
		}
	}
	return p;
}
}