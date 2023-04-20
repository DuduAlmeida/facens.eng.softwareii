package infra;

import java.util.ArrayList;
import java.util.List;

import dominio.Participante;

public class VencedorDaoFalso {

  private static List<Participante> Vencedores = new ArrayList<Participante>();

  public void salva(Participante Participante) {
    Vencedores.add(Participante);
  }

}
