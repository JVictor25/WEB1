package ex.br.ufrn.imd.dao;

import java.util.ArrayList;
import java.util.Comparator;

import ex.br.ufrn.imd.modelo.Animal;
import ex.br.ufrn.imd.modelo.Elefante;
import ex.br.ufrn.imd.modelo.Girafa;
import ex.br.ufrn.imd.modelo.Tigre;

public class AnimalDAO {
	
	private ArrayList<Animal> jaulas;
	
	public AnimalDAO() {
		jaulas = new ArrayList<Animal>();
	}
	
	// m�todo add
	public void addAnimal(Animal a) {
			jaulas.add(a);
			System.out.println("Animal inserido!!!");
	}
	
	public void listarAnimais() {
		System.out.println("**************************************************");
		for(Animal a : jaulas) {
			System.out.println(a);
			System.out.println("**************************************************");
		}
	}
	
	// Alimentar animais
	public void alimentarAnimais() {
		// totais para alimenta��o 
		int vegetal = 0;
		int carne = 0;
		
		System.out.println();
		System.out.println("*******************************************");
		for(Animal a : jaulas) {
			a.comer();
			System.out.println("*******************************************");
			if (a.getAlimentado()) {
				if (a instanceof Elefante) {
					vegetal += a.getQuantidadeAlimento(); 
				} 
				if (a instanceof Girafa) {
					vegetal += a.getQuantidadeAlimento(); 
				} 
				if (a instanceof Tigre) {
					carne += a.getQuantidadeAlimento();
				}
			}
		}
		
		System.out.println("Alimento total usado (Kg): " + (vegetal + carne));
		System.out.println("Frutas e Legumes: " + vegetal);
		System.out.println("Carne: " + carne);
		System.out.println("*******************************************");
	}
	
	// Consultar animais
	public void consultarAnimais() {
		System.out.println("************* Consultas Animais ***********");
		for(Animal a : jaulas) {
			if (a instanceof Elefante) {
				if (a.calcularIdade() % 7 == 0) {
					System.out.println("Elefante - " + a.getNome() + " foi consultado!!!");
				}
			}
			if (a instanceof Girafa) {
				if (a.calcularIdade() % 5 == 0) {
					System.out.println("Girafa - " + a.getNome() + " foi consultado!!!");
				}
			}
			if (a instanceof Tigre) {
				if (a.calcularIdade() % 3 == 0) {
					System.out.println("Tigre - " + a.getNome() + " foi consultado!!!");
				}
			}
		}
		System.out.println("*******************************************");
	}
	
	public void listarIdadesAnimais() {
		// ArrayList p/ guardar os animais por tipo
		ArrayList<Animal> elefantes = new ArrayList<Animal>();
		ArrayList<Animal> girafas = new ArrayList<Animal>();
		ArrayList<Animal> tigres = new ArrayList<Animal>();
		
		System.out.println("************* Animais por Idade ***********");
		for(Animal a : jaulas) {
			if (a instanceof Elefante) {
				elefantes.add(a);
			}
			else if (a instanceof Girafa) {
				girafas.add(a);
			}
			else {
				tigres.add(a);
			}
		}
		
		int ultimo = elefantes.size() -1;
		elefantes.sort(Comparator.comparing(Animal::calcularIdade));
		
		//System.out.println();
		System.out.println("Elefante com Menor idade eh: " 
		+ elefantes.get(0).getNome() + " [" + elefantes.get(0).calcularIdade() + "]");
		
		System.out.println("Elefante com Maior idade eh: " 
		+ elefantes.get(ultimo).getNome() + " [" + elefantes.get(ultimo).calcularIdade()+ "]");
		
		ultimo = girafas.size() -1;
		girafas.sort(Comparator.comparing(Animal::calcularIdade));
		
		System.out.println();
		System.out.println("Girafa com Menor idade eh: " 
		+ girafas.get(0).getNome() + " [" + girafas.get(0).calcularIdade() + "]");
				
		System.out.println("Girafa com Maior idade eh: " 
		+ girafas.get(ultimo).getNome() + " [" + girafas.get(ultimo).calcularIdade()+ "]");
		
		ultimo = tigres.size() -1;
		tigres.sort(Comparator.comparing(Animal::calcularIdade));
		
		System.out.println();
		System.out.println("Tigre com Menor idade eh: " 
		+ tigres.get(0).getNome() + " [" + tigres.get(0).calcularIdade() + "]");
				
		System.out.println("Tigre com Maior idade eh: " 
		+ tigres.get(ultimo).getNome() + " [" + tigres.get(ultimo).calcularIdade()+ "]");
		System.out.println("*******************************************");
	}
}
