package br.com.value.projects.service;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import br.com.value.projects.builder.CriadorDeJogo;
import br.com.value.projects.dominio.Jogo;
import br.com.value.projects.dominio.Participante;
import br.com.value.projects.dominio.Resultado;

//Aqui deixa claro que os testes serão focados para a classe de jogo
public class JogoTeste {

	@Test
	// O nome condiz com o que é testado no método
	public void deveTerJogoComUnicoParticipante() {
		// DANIEL: CENÁRIO
		// Instanciação da classe jogo
		Jogo jogo = new Jogo("Jogo de corrida");

		// DANIEL: RESULTADOS
		// Validando se o tamanho dos resultados é vazio, já que não foi adicionado
		assertEquals(0, jogo.getResultados().size());

		// DANIEL: EXECUÇÃO
		// Adicionando resultados no jogo, e um participante
		jogo.anota(new Resultado(new Participante("Leonardo"), 150));

		// DANIEL: RESULTADOS
		// Validando se o tamanho da lista de resultados é igual a 1
		assertEquals(1, jogo.getResultados().size());

		// Valida se a métrica do primeiro resultado é igual a 150 +- 0.00001
		assertEquals(150.0, jogo.getResultados().get(0).getMetrica(), 0.00001);
	}

	@Test
	// O nome condiz com o que é testado no método
	public void deveTerVariosResultados() {

		// ENRICO: CENÁRIO
		// Instanciação da classe jogo, com 2 resultados, tendo um participante em cada
		// um deles
		Jogo jogo = new CriadorDeJogo()
				.para("Cata moedas")

				// ENRICO: EXECUÇÃO
				.resultado(new Participante("Nelson"), 150.0)
				.resultado(new Participante("Pedro"), 200.0)
				.constroi();

		// EDUARDO: RESULTADOS
		// Valida se há 2 resultados no jogo
		assertEquals(2, jogo.getResultados().size());
		// Valida se a métrica do primeiro resultado é igual a 150 +- 0.00001
		assertEquals(150.0, jogo.getResultados().get(0).getMetrica(), 0.00001);
		// Valida se a métrica do segundo resultado é igual a 200 +- 0.00001
		assertEquals(200.0, jogo.getResultados().get(1).getMetrica(), 0.00001);
	}

	@Test
	// Nome condiz com a implementação do teste
	public void naoDeveAceitarDoisResultadosDoMesmoParticipante() {
		// EDUARDO: CENÁRIO

		// Instanciação de um jogo e participante
		Jogo jogo = new Jogo("Ca�a pe�as");
		Participante leonardo = new Participante("Leonardo");

		// EDUARDO: EXECUÇÃO
		// O resultado que deve ser considerado:
		jogo.anota(new Resultado(leonardo, 500.0));
		// deve ser ignorado
		jogo.anota(new Resultado(leonardo, 600.0));

		// EDUARDO: RESULTADO
		// Valida se há 1 resultado no jogo
		assertEquals(1, jogo.getResultados().size());
		// Valida se a métrica é igual ao primeiro resultado inserido (500 +- 0.00001)
		assertEquals(500, jogo.getResultados().get(0).getMetrica(), 0.00001);
	}

}