package Itens;

public class ProdutoDuravel extends Produto  {
	
	int durabilidade;

public ProdutoDuravel(String nome, double preco, String marca, String descricao, int durabilidade) {
		super(nome, preco, marca, descricao);
		this.durabilidade = durabilidade;
	}
public int getDurabilidade() {
	return durabilidade;
}

public void setDurabilidade(int durabilidade) {
	this.durabilidade = durabilidade;
}
}
