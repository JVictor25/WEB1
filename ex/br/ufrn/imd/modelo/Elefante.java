package ex.br.ufrn.imd.modelo;

public class Elefante extends Animal {
	
	private Integer tamanhoTromba;
	
	public Integer getTamanhoTromba() {
		return tamanhoTromba;
	}

	public void setTamanhoTromba(Integer tamanhoTromba) {
		this.tamanhoTromba = tamanhoTromba;
	}

	public void comer() {
		this.alimentado = true;
		System.out.println("Animal " + this.getNome() +
				" se alimentou de " + (this.peso * 0.15) + " quilos");
		this.quantidadeAlimento = (int) (this.peso * 0.15);
	}

}
