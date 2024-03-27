package Itens;

import java.util.Calendar;
public class ProdutoNaoDuravel extends Produto {
	
	private Calendar dataValidade;
	private String genero;
	
public ProdutoNaoDuravel(String nome, double preco, String marca, String descricao, Date dataValidade,
			String genero) {
		super(nome, preco, marca, descricao);
		this.dataValidade = dataValidade;
		this.genero = genero;
	}

public Calendar getDataValidade() {
	return dataValidade;
}
public void setDataValidade(Date dataValidade) {
	this.dataValidade = dataValidade;
}
public String getGenero() {
	return genero;
}
public void setGenero(String genero) {
	this.genero = genero;
}

}
