function classificadorRank(vitorias=0, derrotas=0){
    if (vitorias === 0 && derrotas ===0) {
        console.log("Para ser Rakeado, você precisa pelo menos jogar uma partida.")
        return false

    } 
    const RANKING = vitorias - derrotas

    return RANKING
}

function pegarRanking(RANKING){
    if (!RANKING){return}

    if(RANKING < 10){
        nivel = "Ferro"
    }else if(RANKING >= 11 && RANKING < 20){
        nivel = "Bronze"
    }else if(RANKING >= 21 && RANKING < 50){
        nivel = "Prata"
    }else if(RANKING >= 51 && RANKING < 80){
        nivel = "Ouro"
    }else if(RANKING >= 81 && RANKING < 90){
        nivel = "Diamante"
    }else if(RANKING >= 91 && RANKING < 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    console.log(`O herói tem um saldo de ${RANKING} e está no nível ${nivel}`)
}

