package imd.modelo;

public class ProdutoDuravel extends Produto {
	
	private Integer durabilidade;
	
	public ProdutoDuravel() {
		durabilidade = 0;
	}

	public Integer getDurabilidade() {
		return durabilidade;
	}

	public void setDurabilidade(Integer durabilidade) {
		this.durabilidade = durabilidade;
	}
}
