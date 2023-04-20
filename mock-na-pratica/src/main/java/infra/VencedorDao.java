package infra;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import dominio.Participante;

public class VencedorDao {

  private Connection conexao;

  public VencedorDao() {
    try {
      this.conexao = DriverManager.getConnection(
          "jdbc:mysql://localhost/mocks", "root", "");
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public void salva(Participante participante) {
    try {
      String sql = "INSERT INTO VENCEDOR (ID, NOME) VALUES (?,?);";
      PreparedStatement ps = conexao.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
      ps.setInt(1, participante.getId());
      ps.setString(2, participante.getNome());

      ps.execute();

      ps.close();

    } catch (SQLException e) {
      throw new RuntimeException(e);
    }

  }

}
