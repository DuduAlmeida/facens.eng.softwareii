package dominio;

import java.util.ArrayList;
import java.util.List;

public class Email {
  public Email() {

  }

  private String _mensagem = "";
  private List<String> _emailDestinatario = new ArrayList<String>();
  private List<String> _emailDestinatarioEmCopia = new ArrayList<String>();

  public List<String> getDestinatarios() {
    return this._emailDestinatario;
  }

  public void resetDestinatarios() {
    this._emailDestinatario = new ArrayList<String>();
  }

  public void addDestinatario(String email) {
    this._emailDestinatario.add(email);
  }

  public List<String> getDestinatariosEmCopia() {
    return this._emailDestinatarioEmCopia;
  }

  public void resetDestinatariosEmCopia() {
    this._emailDestinatarioEmCopia = new ArrayList<String>();
  }

  public void addDestinatarioEmCopia(String email) {
    this._emailDestinatarioEmCopia.add(email);
  }

  public void setMensagem(String mensagem) {
    this._mensagem = mensagem;
  }

  public String getMensagem() {
    return this._mensagem;
  }

}
