const valorProduto = 10;
const valorDaVenda = 18;

if(valorProduto >= 0 && valorDaVenda >= 0){
    const valorTotalProduto = valorProduto + 2;
    const totalDeVendas = (valorDaVenda - valorTotalProduto) * 1000;
    console.log(totalDeVendas);

}else{
    console.log("Erro: valor negativo")

};