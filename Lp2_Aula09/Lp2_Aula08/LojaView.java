package imd.visao;

import java.text.ParseException;
import java.util.Calendar;

import imd.dao.Deposito;
import imd.modelo.Produto;
import imd.modelo.ProdutoDuravel;
import imd.modelo.ProdutoNaoDuravel;

public class LojaView{
	
	public static void main(String[] args) throws ParseException {
		
		Deposito d = new Deposito();
		
		// Livro
		ProdutoDuravel livro  = new ProdutoDuravel();
		livro.setDescricao("Livro infantil");
		livro.setNome("La vai Ana");
		livro.setMarca("N/A");
		livro.setPreco(50.67);
		livro.setDurabilidade(50);
		
		// Geladeira
		ProdutoDuravel geladeira  = new ProdutoDuravel();
		geladeira.setDescricao("Geladeira");
		geladeira.setNome("Geladeira de 420 Lts");
		geladeira.setMarca("Brastemp");
		geladeira.setPreco(900.67);
		geladeira.setDurabilidade(10);

		// Celular
		ProdutoDuravel celular  = new ProdutoDuravel();
		celular.setDescricao("Celular");
		celular.setNome("Galaxy A03");
		celular.setMarca("Samsung");
		celular.setPreco(629.10);
		celular.setDurabilidade(5);
		
		// Sabonete
		ProdutoNaoDuravel sabonete  = new ProdutoNaoDuravel();
		sabonete.setDescricao("Sabonete");
		sabonete.setNome("Buque de Jasmim");
		sabonete.setMarca("Lux");
		sabonete.setPreco(2.69);
		sabonete.setGenero("Higiene_pessoal");
		
		Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, 2024);
        calendar.set(Calendar.MONTH, 05);
        calendar.set(Calendar.DATE, 10);
		//calendar = new GregorianCalendar(2024,05,10);
		sabonete.setDataValidade(calendar);
		
		// Detergente
		ProdutoNaoDuravel detergente  = new ProdutoNaoDuravel();
		detergente.setDescricao("Detergente");
		detergente.setNome("Detergente Liquido");
		detergente.setMarca("Limpol");
		detergente.setPreco(2.35);
		detergente.setGenero("Limpeza");
		
		calendar.set(Calendar.YEAR, 2024);
        calendar.set(Calendar.MONTH, 12);
        calendar.set(Calendar.DATE, 31);
		detergente.setDataValidade(calendar);
		
		// Chocolate
		ProdutoNaoDuravel chocolate  = new ProdutoNaoDuravel();
		chocolate.setDescricao("Chocolate");
		chocolate.setNome("Mini show lanut 108g");
		chocolate.setMarca("Cacau Show");
		chocolate.setPreco(2.35);
		chocolate.setGenero("Alimenticio");
		
		calendar.set(Calendar.YEAR, 2023);
        calendar.set(Calendar.MONTH, 06);
        calendar.set(Calendar.DATE, 20);
		chocolate.setDataValidade(calendar);
		
		System.out.println("Deposito vazio? " + d.depositoVazio());
		System.out.println();
		
		// Add produtos
		d.addProduto (livro);
		d.addProduto(geladeira);
		d.addProduto(celular);
		d.addProduto(sabonete);
		d.addProduto(detergente);
		d.addProduto(chocolate);
		
		System.out.println("Produtos no Deposito: " + d.quantidadeProdutos());
		System.out.println();
		
		Produto pCaro =d.maisCaro();
		System.out.println("Produto mais caro: " + pCaro.getNome());
		System.out.println("Preco: " + pCaro.getPreco());
		System.out.println();
		
		d.removeProduto(chocolate);
		
		System.out.println("Produtos no Deposito: " + d.quantidadeProdutos());
		System.out.println();
	}
}