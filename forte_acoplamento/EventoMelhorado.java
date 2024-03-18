package forte_acoplamento;
import java.util.Date;

public class EventoMelhorado {
	

	private String descricao;
	
	private Date data;

	public void agendar(String descricao, Date data) {
		this.descricao = descricao;
		this.data = data;
	}
	
	public String getDescricao() {
		return descricao;
	}

	public Date getData() {
		return data;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public void setData(Date descricao) {
		this.data = descricao;
	}
}