const { Strings } = require("./strings");

function navigation() {
  function visitBugerEats() {
    cy.visit(Strings.url.paginaInicial)
  }
  return {
    visitBugerEats
  };
}

function element() {
  function clicar(elemento) {
    cy.get(elemento).click()
  }

  function digite(elemento, valor) {
    cy.get(elemento).type(valor)
  }

  function clicarElementoContendoTexto(elemento, texto) {
    cy.get(elemento).contains(texto).click()
  }

  function anexarArquivo(elemento, arquivo) {
    cy.get(elemento).attachFile(arquivo)
  }

  return {
    clicar,
    digite,
    clicarElementoContendoTexto,
    anexarArquivo
  };
}

module.exports = {
    navigation: navigation,
    element: element
};