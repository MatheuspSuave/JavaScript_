function tabuada(){
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    
    tab.innerHTML = '';

    if(num.value.length == 0){
        alert('Por favor, digite um número!');
    } else {
        var n = Number(num.value);

        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item);
        }
    }
}
