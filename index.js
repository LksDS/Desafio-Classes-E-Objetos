class Hero {
    definirAtaque(){
        let ataque
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shurikens"
                break;
        }
        return ataque
    }
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.definirAtaque()
        this.atacar()
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
} 

const heroiguerreiro = new Hero("Lucas",16,"guerreiro")
const heroimago = new Hero("Lucas",16,"mago")
const heroimonge = new Hero("Lucas",16,"monge")
const heroininja = new Hero("Lucas",16,"ninja")