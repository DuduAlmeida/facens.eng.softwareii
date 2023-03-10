package br.com.value.projects.service;

import org.junit.*;

import br.com.value.projects.builder.CriadorDeJogo;
import br.com.value.projects.dominio.Participante;
import br.com.value.projects.dominio.Jogo;
import br.com.value.projects.dominio.Resultado;

//Deixa claro que testará a feature de Julgamento, que não é necessariamente uma classe.
public class JulgamentoTeste {

	private Juiz juiz;
	private Participante joao;
	private Participante pedro;
	private Participante katia;
	private Participante maria;

	@Before
	// O método cria juiz é realizado antes de cada teste unitário da classe, ou
	// seja, cada método do @Test
	// Nele é instanciado alguns participantes e um juiz
	public void criaJuiz() {
		// JHONATAN: CENÁRIO

		this.juiz = new Juiz();
		this.joao = new Participante("Joao");
		this.pedro = new Participante("Pedro");
		this.katia = new Participante("Katia");
		this.maria = new Participante("Maria");

	}

	@Test
	// O nome condiz com o que é testado no método
	public void deveJulgarPrimeiroEultimoColocado() {

		// JHONATAN: CENÁRIO
		// Instanciação de um jogo
		Jogo jogo = new Jogo("Derruba barreiras");

		// JHONATAN: EXECUÇÃO
		// adicionando resultados para cada participante
		jogo.anota(new Resultado(joao, 90.0));
		jogo.anota(new Resultado(pedro, 91.0));
		jogo.anota(new Resultado(katia, 93.0));
		jogo.anota(new Resultado(maria, 94.0));

		// Pedindo para o juiz julgar o jogo
		juiz.julga(jogo);

		// Métrica do maior participante (maria)
		double vencedorJogo = 94;
		// Métrica do menor participante (joao)
		double ultimoColocadoJogo = 90;

		// JHONATAN: RESULTADOS
		// Validando se os resultados do primeiro e ultimo colocados condizem com o
		// inserido
		Assert.assertEquals(vencedorJogo, juiz.getPrimeiroColocado(), 0.00001);
		Assert.assertEquals(ultimoColocadoJogo, juiz.getUltimoColocado(), 0.00001);
	}

	// TODOS: RESULTADOS
	// Nesse arquivo não é validado com o Assert.assertEquals, o resultado é
	// validado se terá uma exceção lançada durante a execução
	@Test(expected = RuntimeException.class)
	public void naoDeveJulgarSemResultado() {
		// TODOS: CENÁRIO
		Jogo jogo = new CriadorDeJogo()
				// TODOS: EXECUÇÃO
				.para("Ca�a pe�as")
				.constroi();

		juiz.julga(jogo);
	}

}
