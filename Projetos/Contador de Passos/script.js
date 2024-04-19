function contar(){
    ini = document.getElementById('txti')
    fim = document.getElementById('txtf')
    passo = document.getElementById('txtp')
    res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar! '
        alert('[ERRO] Dados insuficientes! ')
    } else {
        res.innerHTML = 'Contando: '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if (p <= 0){
            alert('Passo Invalido!, considerando passo = 1 ')
            p = 1
        }

        if (i < f){
            for(c = i; c <= f; c = c + p){
                res.innerHTML = res.innerHTML + ` ${c}  \u{1F449} `;
                res.innerHTML = res.innerHTML + `\u{1F3C1}`
        }   
        } else if (i > f) {
            for(c = i; c >= f; c = c - p){
                res.innerHTML = res.innerHTML + ` ${c}  \u{1F449} `;
                res.innerHTML = res.innerHTML + `\u{1F3C1}`
            }
        }
        
    }
}