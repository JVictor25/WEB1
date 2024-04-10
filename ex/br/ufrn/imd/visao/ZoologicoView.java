package ex.br.ufrn.imd.visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import ex.br.ufrn.imd.dao.AnimalDAO;
import ex.br.ufrn.imd.modelo.Elefante;
import ex.br.ufrn.imd.modelo.Girafa;
import ex.br.ufrn.imd.modelo.Tigre;

public class ZoologicoView {

	public static void main(String[] args) throws ParseException {
		
		AnimalDAO aDao = new AnimalDAO();
		
		Date dt = new Date();
		SimpleDateFormat formato = new SimpleDateFormat("dd-MM-yyyy");
		
		Tigre an1 = new Tigre();
		Tigre an2 = new Tigre();
		Tigre an8 = new Tigre();
		Girafa an3 = new Girafa();
		Girafa an4 = new Girafa();
		Girafa an9 = new Girafa();
		Elefante an5 = new Elefante();
		Elefante an6 = new Elefante();
		Elefante an7 = new Elefante();
		
		an1.setNome("Simba");
		an1.setAlimentacao("Carne");
		an1.setPeso(350);
		an1.setTipoTigre("Bengala");
		dt = formato.parse("16-06-1995");
		an1.setDataNascimento(dt);
		aDao.addAnimal(an1);
		
		an2.setNome("Kairos");
		an2.setAlimentacao("Carne");
		an2.setPeso(300);
		an2.setTipoTigre("Malaio");
		dt = formato.parse("16-10-1998");
		an2.setDataNascimento(dt);
		aDao.addAnimal(an2);
		
		an8.setNome("Jabari");
		an8.setAlimentacao("Carne");
		an8.setPeso(370);
		an8.setTipoTigre("Siberiano");
		dt = formato.parse("16-10-1988");
		an8.setDataNascimento(dt);
		aDao.addAnimal(an8);
		
		an3.setNome("Cristal");
		an3.setAlimentacao("Verduras e Frutas");
		an3.setPeso(500);
		an3.setTamanhoLingua(50);
		dt = formato.parse("10-01-2020");
		an3.setDataNascimento(dt);
		aDao.addAnimal(an3);
		
		an4.setNome("Olivia");
		an4.setAlimentacao("Verduras e Frutas");
		an4.setPeso(450);
		an4.setTamanhoLingua(60);
		dt = formato.parse("10-02-2015");
		an4.setDataNascimento(dt);
		aDao.addAnimal(an4);
		
		an9.setNome("Rafik");
		an9.setAlimentacao("Verduras e Frutas");
		an9.setPeso(550);
		an9.setTamanhoLingua(70);
		dt = formato.parse("10-02-2008");
		an9.setDataNascimento(dt);
		aDao.addAnimal(an9);
		
		an5.setNome("Dumbo");
		an5.setAlimentacao("Verduras e Frutas");
		an5.setPeso(750);
		an5.setTamanhoTromba(100);
		dt = formato.parse("10-04-2015");
		an5.setDataNascimento(dt);
		aDao.addAnimal(an5);
		
		an6.setNome("Mandy");
		an6.setAlimentacao("Verduras e Frutas");
		an6.setPeso(1000);
		an6.setTamanhoTromba(150);
		dt = formato.parse("20-06-2000");
		an6.setDataNascimento(dt);
		aDao.addAnimal(an6);
		
		an7.setNome("Tantor");
		an7.setAlimentacao("Verduras e Frutas");
		an7.setPeso(900);
		an7.setTamanhoTromba(150);
		dt = formato.parse("20-06-1999");
		an7.setDataNascimento(dt);
		aDao.addAnimal(an7);
		
		System.out.println("");
		// Listar animais
		aDao.listarAnimais();
		
		// Alimentar animais
		aDao.alimentarAnimais();
		
		System.out.println("");
		// Consultar animais
		aDao.consultarAnimais();
		
		System.out.println("");
		// Animais por idade
		aDao.listarIdadesAnimais();
	}
}
