function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const numberetdittresult = document.querySelector(".nummeretditt")

   

    if (max >= min) {
        alert("O valor MINIMO tem que ser MENOR que o valor MÁXIMO")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        numberetdittresult.innerHTML = result
    }

   



    console.log(min, max)
}

