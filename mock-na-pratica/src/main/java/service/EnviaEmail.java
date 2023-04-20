package service;

import java.util.List;

import dominio.Email;
import dominio.Participante;
import infra.EmailDaoFalso;

public class EnviaEmail {
  private EmailDaoFalso emailDaoFalso;

  public EnviaEmail() {
  }

  public void enviarParaDestinatario(Email email) {
    for (String emailParaEnvio : email.getDestinatarios()) {
      if (emailParaEnvio == "")
        throw new RuntimeException("Email do destinatário não é válido!");

      emailDaoFalso.enviar(emailParaEnvio, email.getMensagem());
    }

  }

  public void enviarParaVencedor(Email email, Participante vencedor) {
    email.addDestinatario(vencedor.getEmail());
    email.setMensagem(vencedor.getNome() + " é o vencedor dessa partida! Parabéns pelo esforço de sempre");

    this.enviarParaDestinatario(email);
  }

}
