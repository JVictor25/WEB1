package ex.br.ufrn.imd.modelo;

import java.util.Calendar;
import java.util.Date;

public class Animal {
	
	protected String nome; 
	protected String alimentacao;
	protected Integer peso;
	protected Boolean alimentado;
	protected Date dataNascimento;
	protected Integer quantidadeAlimento;
	
	public Animal() {
		alimentado = false;
		quantidadeAlimento = 0;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getAlimentacao() {
		return alimentacao;
	}

	public void setAlimentacao(String alimentacao) {
		this.alimentacao = alimentacao;
	}

	public Integer getPeso() {
		return peso;
	}

	public void setPeso(Integer peso) {
		this.peso = peso;
	}

	public Boolean getAlimentado() {
		return alimentado;
	}

	public void setAlimentado(Boolean alimentado) {
		this.alimentado = alimentado;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
	public Integer getQuantidadeAlimento() {
		return quantidadeAlimento;
	}

	public void comer() {
		this.alimentado = true;
		System.out.println("Animal " + this.getNome() +
				" se alimentou de " + (this.peso * 0.05) + " quilos");
		this.quantidadeAlimento = (int) (this.peso * 0.05);
	}
	
	public int calcularIdade(){
		
		// Ano atual
		Calendar hoje = Calendar.getInstance();
		int anoHoje = hoje.get(Calendar.YEAR);
		
		// Ano de Nasciemnto do Animal
        Calendar nascimento = Calendar.getInstance();
        nascimento.setTime(this.dataNascimento);
        int anoNascimento = nascimento.get(Calendar.YEAR);
        
        return (anoHoje - anoNascimento);
    }
	
	
	public String toString() {
		String out = "";
		
		out += "Nome: " + this.getNome() + "\t" + "Alimentacao: " + this.getAlimentacao() +
				"\n" + "Peso: " + this.getPeso() + "\t" + "Idade: " + this.calcularIdade() +
				"\t" + "Alimentado: " + this.getAlimentado();
		
		return out;
	}

}
