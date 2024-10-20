class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if (this.tipo === "guerreiro"){
            ataque = "usou espada"
        }else if (this.tipo === "mago"){
            ataque = "usou magia"
        }else if (this.tipo === "monge"){
            ataque = "usou artes marciais"
        }else {
            ataque = "usou shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar()

let heroi2 = new Heroi("Merlin", 100, "mago");
heroi2.atacar()

