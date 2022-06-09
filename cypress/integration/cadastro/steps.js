import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as actions from "../../common/actions";
import * as element from '../../support/locators/cadastro';


Given(/^usuario na pagina inicial do sistema$/, () => {
  actions.navigation().visitBugerEats()
});

When(/^opta por realizar o cadastro$/, () => {
  actions.element().clicar(element.cadastro.btnCadastrar)
});

When(/^preenche o nome$/, () => {
  actions.element().digite(element.cadastro.fieldNome, 'Seu Nome')
});

When(/^preenche o CEP valido$/, () => {
  actions.element().digite(element.cadastro.fieldCep, '24812288')
  actions.element().clicar(element.cadastro.btnBuscarCep)
});

When(/^seleciona o metodo de entrega "([^"]*)"$/, (elemento) => {
  actions.element().clicarElementoContendoTexto(element.cadastro.metodoEntrega, elemento)
});

When(/^anexa arquivo "([^"]*)"$/, (arquivo) => {
  actions.element().anexarArquivo(element.cadastro.importaArquivo, arquivo)
});
