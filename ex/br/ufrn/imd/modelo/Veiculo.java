package ex.br.ufrn.imd.modelo;

/**
 * A classe Veiculo ser� a superclasse da hierarquia (Carros e Motos)
 * <br>
 * Exemplo de quebra de linha .....
 * 
 * @author Jo�o Carlos
 * @version 1.0
 *
 */

public class Veiculo {
	
	protected String marca;
	protected String placa;
	protected double valorAluguel;
	protected boolean alugado;
	protected Integer quilometragem;
	
	public Veiculo() {
		alugado = false;
		valorAluguel = 0.0;
		quilometragem = 0;
	}

	public String getMarca() {
		return marca;
	}
	
	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public String getPlaca() {
		return placa;
	}
	
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	
	public double getValorAluguel() {
		return valorAluguel;
	}
	
	public void setValorAluguel(double valorAluguel) {
		this.valorAluguel = valorAluguel;
	}
	/**
	 * Metodo estaAlugado retorna todos os veiculos alugados
	 * @return boolean
	 */
	public boolean isAlugado() {
		return alugado;
	}
	
	public void setAlugado(boolean alugado) {
		this.alugado = alugado;
	}

	public Integer getQuilometragem() {
		return quilometragem;
	}

	public void setQuilometragem(Integer quilometragem) {
		this.quilometragem = quilometragem;
	}
}
