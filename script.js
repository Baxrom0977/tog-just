let num = +prompt("Son kiriting tog' yoki juftligini topib beramiz ")
while (num == 0 || isNaN(num)) {
        num = +prompt('Brat yorvosiz son kiritin')
    }
    if (num % 2 == 0) {
        alert('Siz kiritgan son ' + num + ' juft')
    } else if (num % 2 == 1) {
        alert('Siz kiritgan son ' + num + ' tog')
    }
    // else {
    //     alert('Bu son emas, iltimos son kiriting')
    // }