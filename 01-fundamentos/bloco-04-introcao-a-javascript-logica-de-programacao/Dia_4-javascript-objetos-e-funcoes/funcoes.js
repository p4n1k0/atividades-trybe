function verificaPalindrome(palavra){
    for(index in palavra){
        if(palavra[index] != palavra[(palavra.length - 1) - index]){
            return false;
        }
    }
    return true
}

console.log(verificaPalindrome('ovo'));