package forte_acoplamento;
import java.util.Scanner;

public class Escola {
Evento e = new Evento();

public void cadastrarEvento() {
	Scanner ler = new Scanner(System.in);
	String nome = "";
	int dia, mes, ano;
	
	System.out.printf("Informe a descricao do envento:\n");
	nome = ler.next();
	
	System.out.printf("Informe o dia do envento:\n");
	dia = ler.nextInt();
	
	System.out.printf("Informe o mes do envento:\n");
	mes = ler.nextInt();
	
	System.out.printf("Informe o ano do envento:\n");
	ano = ler.nextInt();
	
	e.agendar(nome, dia, mes, ano);
}
public void mostrarEvento() {
	System.out.println("\n");
	System.out.println("Evento: " + e.getNome());
	System.out.println("Data: " + e.get() + "/" + e.getMes() + "/" + e.getAno());
}

}
