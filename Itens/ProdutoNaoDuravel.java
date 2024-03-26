package Itens;
import java.util.Date;

public class ProdutoNaoDuravel extends Produto {
	
	Date dataValidade;
	String genero;
	
public ProdutoNaoDuravel(String nome, double preco, String marca, String descricao, Date dataValidade,
			String genero) {
		super(nome, preco, marca, descricao);
		this.dataValidade = dataValidade;
		this.genero = genero;
	}

public Date getDataValidade() {
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
