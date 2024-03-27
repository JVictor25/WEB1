package Lp2_Aula09.Lp2_Aula08;

import java.util.ArrayList;

import imd.modelo.Produto;

public class Deposito {
	private ArrayList <Produto> produtos;
	
	public Deposito() {
		produtos = new ArrayList<Produto>();
	}
	
	public void addProduto(Produto p) {
		produtos.add(p);
		System.out.println("Produto - " + p.getDescricao() + " adicionado!!!!");
	}
	
	public void removeProduto(Produto p) {
		produtos.remove(p);
		System.out.println("Produto - " + p.getDescricao() + " removido!!!!");
	}
	
	public int quantidadeProdutos() {
		return produtos.size();
	}
	
	public boolean depositoVazio() {
		return produtos.size()==0 ? true:false;
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
