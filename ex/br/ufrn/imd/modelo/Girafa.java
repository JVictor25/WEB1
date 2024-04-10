package ex.br.ufrn.imd.modelo;

public class Girafa extends Animal {
	
	private Integer tamanhoLingua;
	
	public Integer getTamanhoLingua() {
		return tamanhoLingua;
	}

	public void setTamanhoLingua(Integer tamanhoLingua) {
		this.tamanhoLingua = tamanhoLingua;
	}

	public void comer() {
		this.alimentado = true;
		System.out.println("Animal " + this.getNome() +
				" se alimentou de " + (this.peso * 0.10) + " quilos");
		this.quantidadeAlimento = (int) (this.peso * 0.10);
	}

}
