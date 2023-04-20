package dominio;

public class Participante {

	private int id;
	private String nome;
	private String email;

	public Participante(String nome) {
		this.id = 0;
		this.nome = nome;
		this.email = "";
	}

	public Participante(String nome, String email) {
		this.id = 0;
		this.nome = nome;
		this.email = email;
	}

	public Participante(int id, String nome) {
		this.id = id;
		this.nome = nome;
		this.email = "";
	}

	public Participante(int id, String nome, String email) {
		this.id = id;
		this.nome = nome;
		this.email = email;
	}

	public int getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Participante other = (Participante) obj;
		if (id != other.id)
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}

}
