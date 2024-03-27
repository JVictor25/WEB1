package Itens;
import java.util.Calendar;

public class LojaView {
	Deposito deposito = new Deposito();
	int n=2;
	
	Produto produtoDuravel1 = new ProdutoDuravel("Geladeira", 999.99, "Brastemp", "Geladeira espaçosa, econômica e barata", 10);
	Produto produtoDuravel2 = new ProdutoDuravel("Livro", 74.49, "Duna", "Uma estonteante mistura de aventura e misticismo, ecologia e política", 5);
	Produto produtoDuravel3 = new ProdutoDuravel("Celular", 4099.00, "Sansung-S23","Tem um grande display de 6.1 polegadas com uma resolução de 2340x1080 pixel. As funcionalidades oferecidas pelo Samsung Galaxy S23 são muitas e inovadoras.", 4);
	
	 Date dataValidade1 = new Date();
	 Date dataValidade2 = new Date();
	 Date dataValidade3 = new Date();
	
	 Calendar calendar = Calendar.getInstance();
     calendar.set(Calendar.YEAR, 2024);
     calendar.set(Calendar.MONTH, 06);
     calendar.set(Calendar.DATE, 14);
	 
    Produto produtoNaoDuravel1 = new ProdutoNaoDuravel("Chocolate", 5.00, "Espírito Cacau", "Os chocolates Espírito Cacau são produzidos com cacau fino cultivado em fazendas", calendar, "Alimentício");
    
    calendar.set(Calendar.YEAR, 2025);
    calendar.set(Calendar.MONTH, 11);
    calendar.set(Calendar.DATE, 29);
    
    Produto produtoNaoDuravel2 = new ProdutoNaoDuravel("Detergente", 2.63, "Ypê", "O detergente Lava-Louças Ypê é líder na categoria e possui uma fórmula que proporciona rendimento com eficiência de limpeza e economia.", calendar, "Limpeza");
    
    calendar.set(Calendar.YEAR, 2026);
    calendar.set(Calendar.MONTH, 02);
    calendar.set(Calendar.DATE, 24);
    
    Produto produtoNaoDuravel3 = new ProdutoNaoDuravel("Sabonete", 3.98, "Senador", " O Sabonete Senador Classic é pioneiro no cuidado masculino, com fórmula de alta espumação para tornar um banho único.", calendar, "Higiene Pessoal");
    		
    public void adicionarProdutos() {
        deposito.adicionarProduto(produtoDuravel1);
        deposito.adicionarProduto(produtoDuravel2);
        deposito.adicionarProduto(produtoDuravel3);
        deposito.adicionarProduto(produtoNaoDuravel1);
        deposito.adicionarProduto(produtoNaoDuravel2);
        deposito.adicionarProduto(produtoNaoDuravel3);
    }

    public void removerProduto(Produto produto) {
        deposito.removerProduto(produto);
    }

    public int informarQuantidadeProdutos() {
        return deposito.informarQuantidadeProdutos();
    }

    public boolean depositoEstaVazio() {
        return deposito.depositoEstaVazio();
    }
    
    public Produto maisCaroView(){
    	return deposito.maisCaro();
    }
    
    public class Main {
        public static void main(String[] args) {
            LojaView lojaView = new LojaView();
            if (lojaView.depositoEstaVazio()) {
            	System.out.println("Deposito está vazio");
            }
            else {
            	System.out.println("Deposito Não está vazio");
            }
            lojaView.adicionarProdutos();
            System.out.println("Quantidade de produtos no depósito: " + lojaView.informarQuantidadeProdutos());
            if (lojaView.depositoEstaVazio()) {
            	System.out.println("Deposito está vazio");
            }
            else {
            	System.out.println("Deposito Não está vazio");
            }
            Poduto p =maisCaroView();
            
            System.out.println("O produto mais caro é" + p.getname());
            
            removerProduto(p);
            
            p =maisCaroView();
            
            System.out.println("O produto mais caro é" + p.getname());
        }
    }
}
