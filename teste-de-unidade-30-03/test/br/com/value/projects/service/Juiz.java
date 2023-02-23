
package br.com.value.projects.service;

import br.com.value.projects.dominio.*;

//Como os métodos dessa classe não possui @Test antes da declaração, eles não são compilados
//pelo JUnit, além disso, ao olhar a semântica da classe, verifica-se que
//o nome não demonstra que o intuito dessa classe é testar algo
public class Juiz {

	private double maisPontos = Double.NEGATIVE_INFINITY;
	private double menosPontos = Double.POSITIVE_INFINITY;

	public void julga(Jogo jogo) {
		if (jogo.getResultados().size() == 0) {
			throw new RuntimeException("Sem resultados n�o h� julgamento!");
		}
		for (Resultado resultado : jogo.getResultados()) {
			if (resultado.getMetrica() > maisPontos)
				maisPontos = resultado.getMetrica();
			if (resultado.getMetrica() < menosPontos)
				menosPontos = resultado.getMetrica();

		}
	}

	// O nome não condiz com o realizado no método, um bom nome seria:
	// getMaiorPontuacao
	public double getPrimeiroColocado() {

		return maisPontos;
	}

	// O nome não condiz com o realizado no método, um bom nome seria:
	// getMenorPontuacao
	public double getUltimoColocado() {

		return menosPontos;
	}

}
