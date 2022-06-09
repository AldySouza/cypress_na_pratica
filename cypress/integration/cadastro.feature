#language: pt
@cadastro
Funcionalidade: Realizar cadastro de novo entregador
Eu como usuário do Buger Eats
Desejo cadastrar-me como entregador
Para que possa desfrutar das funcionalidades deste tipo de usuário
 
Esquema do Cenário: Realizar cadastro de novo entregador com sucesso
    Dado usuario na pagina inicial do sistema
    Quando opta por realizar o cadastro
    E preenche o nome
    E preenche o CEP valido
    E seleciona o metodo de entrega "<metodo>"
    E anexa arquivo "matrix.jpeg"
    Exemplos: 
    | metodo | 
    | Van/Carro |
    | Bicicleta |
    | Moto |
