package forte_acoplamento;
import java.util.Scanner;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;


public class EscolaVisaoMelhorado {
	
	public static void main(String args[]) throws ParseException {
		EscolaMelhorada escola = new EscolaMelhorada();
		EventoMelhorado evento = new EventoMelhorado();
		
		Scanner ler = new Scanner(System.in);
		
		String descricao = "";
		String data = "00-00-0000";
		
		System.out.printf("Informe a descricao do evento:\n");
		descricao = ler.next();
		
		System.out.printf("Informe a data do evento:\n");
		data = ler.next();
		
		Date dt = new Date();
		SimpleDateFormat formato = new SimpleDateFormat();
		dt = formato.parse(data);
		
		
	}
	

}
