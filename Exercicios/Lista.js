num = [5, 7, 3, 8, 6, ]
num.push(2)
num[7] = 9
num[8] = 4
for (p = 0; p < num.length; p = p + 1) {
    num.sort()
    console.log(`A posição do numero e ${p} esta na posição ${num[p]}`)
}
    va = num.indexOf(2)
    if (va == -1){
        console.log(`O valor nao foi encontrado`)
    } else {
        console.log(`O valor escolhaido esta na lista`)
    }


