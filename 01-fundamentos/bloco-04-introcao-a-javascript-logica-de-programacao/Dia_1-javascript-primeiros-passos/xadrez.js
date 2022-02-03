const peca = "Bispo";

switch (peca.toLowerCase()){
    case "rei":
        console.log("Rei - uma casa apenas para qualquer direção.");
        break;
    
    case "bispo":
        console.log("Bispo - diagonal");
        break;

    case "rainha":
        console.log("Rainha - diagonal, horizonal e vertical");
        break;

    case "torre":
        console.log("Torre - horizontal e vertical");
        break;
            
    case "peao":
        console.log("Peao - Um casa a frente, apenas no primeiro movimento duas");
        break;

    case "cavalo":
        console.log("Cavalo - em 'L' e pula sobre as peças");
        break;

    default:
        console.log("Peça inválida");    
}            
