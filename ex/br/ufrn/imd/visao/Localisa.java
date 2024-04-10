package ex.br.ufrn.imd.visao;

import ex.br.ufrn.imd.dao.Repositorio;
import ex.br.ufrn.imd.modelo.Carro;
import ex.br.ufrn.imd.modelo.Moto;

public class Localisa {

	public static void main(String[] args) {
		
		Repositorio banco = new Repositorio();
		
		Carro c = new Carro();
		c.setAlugado(true);
		c.setMarca("Ford");
		c.setPlaca("AAA-8888");
		c.setPortas(4);
		c.setPotencia(1600);
		c.setValorAluguel(5 * 115.5);
		c.setQuilometragem(21000);
		
		Carro c2 = new Carro();
		c2.setAlugado(true);
		c2.setMarca("Fiat");
		c2.setPlaca("ABB-1000");
		c2.setPortas(4);
		c2.setPotencia(1000);
		c2.setValorAluguel(3 * 75.0);
		c2.setQuilometragem(15000);
		
		Carro c3 = new Carro();
		c3.setAlugado(false);
		c3.setMarca("Fiat");
		c3.setPlaca("ABC-5501");
		c3.setPortas(2);
		c3.setPotencia(1200);
		c3.setValorAluguel(1 * 75.0);
		c3.setQuilometragem(14000);
		
		Moto m1 = new Moto();
		m1.setAlugado(false);
		m1.setMarca("Honda");
		m1.setPlaca("BBB-2019");
		m1.setCilindradas(850);
		m1.setPartida("El�trica");
		m1.setValorAluguel(1 * 55.25);
		m1.setQuilometragem(3500);
		
		Moto m2 = new Moto();
		m2.setAlugado(true);
		m2.setMarca("Yamaha");
		m2.setPlaca("XYZ-2019");
		m2.setCilindradas(250);
		m2.setPartida("El�trica");
		m2.setValorAluguel(2 * 55.25);
		m2.setQuilometragem(4500);
				
		banco.addVeiculo(c);
		banco.addVeiculo(c2);
		banco.addVeiculo(c3);
		banco.addVeiculo(m1);
		banco.addVeiculo(m2);
		System.out.println("");
		
		banco.printVeiculos();
		System.out.println("");
		
		banco.printAlugados();
		System.out.println("");
		
		banco.printLivres(); 
		System.out.println("");
		
		banco.efetuarManutencao();
	}
}
