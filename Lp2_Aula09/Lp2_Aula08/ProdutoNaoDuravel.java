package imd.modelo;

import java.util.Calendar;

public class ProdutoNaoDuravel extends Produto{
	
	private String genero;
	private Calendar dataValidade;
	
	public ProdutoNaoDuravel() {
		genero = "";
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public Calendar getDataValidade() {
		return dataValidade;
	}

	public void setDataValidade(Calendar dataValidade) {
		this.dataValidade = dataValidade;
	}
}
