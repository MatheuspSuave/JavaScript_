function verificar() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - parseInt(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'url_for_boy_under_10.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'url_for_boy_between_10_and_20.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'url_for_boy_between_21_and_49.jpg');
            } else {
                img.setAttribute('src', 'url_for_boy_50_or_above.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'url_for_girl_under_10.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'url_for_girl_between_10_and_20.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'url_for_girl_between_21_and_49.jpg');
            } else {
                img.setAttribute('src', 'url_for_girl_50_or_above.jpg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
