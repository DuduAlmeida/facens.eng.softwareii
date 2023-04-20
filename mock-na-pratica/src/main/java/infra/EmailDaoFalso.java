package infra;

public class EmailDaoFalso {

  public String enviar(String email, String mensagem) {

    return "Email enviado para " + email + "com a mensagem" + mensagem;
  }
}
