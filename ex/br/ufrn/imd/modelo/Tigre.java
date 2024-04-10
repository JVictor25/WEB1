package ex.br.ufrn.imd.modelo;

public class Tigre extends Animal {
	
	private String tipoTigre;
	
	public String getTipoTigre() {
		return tipoTigre;
	}

	public void setTipoTigre(String tipoTigre) {
		this.tipoTigre = tipoTigre;
	}

	public void comer() {
		this.alimentado = true;
		System.out.println("Animal " + this.getNome() +
				" se alimentou de " + (this.peso * 0.04) + " quilos");
		this.quantidadeAlimento = (int) (this.peso * 0.04);
	}

}
