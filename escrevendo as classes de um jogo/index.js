// Definindo a classe Heroi
class heroi {
    // Inicializando o construtor da classe
    constructor(nome, idade, tipo) {
      // Atribuindo os valores dos parâmetros às propriedades da classe
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Definindo o método atacar da classe
    atacar() {
      // Criando um objeto que mapeia cada tipo de herói a um tipo de ataque
      let ataques = {
        Mago: "magia",
        Guerreiro: "espada",
        Monge: "artes marciais",
        Ninja: "shuriken",
      };
      // Verificando se o tipo do herói está no objeto
      if (this.tipo in ataques) {
        // Exibindo a mensagem de ataque conforme o tipo do herói
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataques[this.tipo]}`);
      } else {
        // Exibindo uma mensagem de erro se o tipo do herói não for válido
        console.log(`O tipo ${this.tipo} não é válido`);
      }
    }
  }

  // Criando uma instância da classe heroi
let heroi1 = new heroi('Bushido', 533, 'Guerreiro');

// Chamando o método atacar da instância
heroi1.atacar();

