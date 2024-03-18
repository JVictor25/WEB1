package forte_acoplamento;


public class Evento {
	public void agendar(String nome, int dia, int mes, int ano) {
		this.nome = nome;
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}

	private String nome;
	
	private int dia, mes, ano;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getDia() {
		return dia;
	}

	public void setDia(int dia) {
		this.dia = dia;
	}

	public int getMes() {
		return mes;
	}

	public void setMes(int mes) {
		this.mes = mes;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

}
