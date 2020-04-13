const VALIDATE = {
  _CPF:  (strCPF) => {

    var Soma;
    var Resto;
    Soma = 0;
    let aux = [];
    let arrCPF = strCPF.split('');

    for (let i = 0; i <= arrCPF.length; i++) {
      let n = i + 1;
      if (parseInt(arrCPF[n]) === parseInt(arrCPF[i])) {
        aux.push(arrCPF[n]);
        for (let a = 0; a <= 4; a++) {
          n++
          if (parseInt(arrCPF[n]) === undefined || parseInt(arrCPF[n]) === NaN) {
            return false;
          } else {
            if (parseInt(arrCPF[n]) === parseInt(arrCPF[i]))
            aux.push(arrCPF[n]) 
          }
          console.log(aux)
          if (aux.length >= 3) {
            i = arrCPF.length
          }
        }
      } 
    }
    if (aux.length >= 3) return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true
  },
  _IS_EMPTY: arr => {
    let val = false;
    if (arr.length === 0) {
      return val
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
          val = true;
        }
      }
    }
    return val;
  },
  _IS_EQUAL_PASSWORD: (first_pass, second_pass) => {
    return first_pass === second_pass
  },
  _ONLY_TEXT: (str) => {
    const _NUM_REGEX = /^[0-9]+$/;
    if (!str.match(_NUM_REGEX)) return str.replace(/[0-9]+/g, '')
  },
  _ONLY_NUMBERS: (str) => {
    const _NUM_REGEX = /^[0-9]+$/;
    const _ARR = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(_NUM_REGEX)) _ARR.push(str[i])
        }
        return _ARR.slice(",").join('');
  },
  _DELAY_ACTION : (controller, callback, time) => {
    let counter = 0;
    const handleAction = () => {
        if (counter === 0) {
            counter++
            return (controller())
        } else {
            clearInterval(timer);
        }
    };
    (callback())
    const timer = setTimeout(handleAction, time);
},

}

export default VALIDATE;

/*
falo nada, e digo mais
amoraes, kaique.

░░█▀░░░░░░░░░░░▀▀███████░░░░
░░█▌░░░░░░░░░░░░░░░▀██████░░░
░█▌░░░░░░░░░░░░░░░░███████▌░░
░█░░░░░░░░░░░░░░░░░████████░░
▐▌░░░░░░░░░░░░░░░░░▀██████▌░░
░▌▄███▌░░░░▀████▄░░░░▀████▌░░
▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░
▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌
▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌
▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌
░▌░░▀▀▄▄▀▀▄▌▌░░░░░░░░░░▐░▀▐▐░
░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░
░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░
░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░
░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░
░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░
░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░
░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░
░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░
▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░
░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄
░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░
░░▄▌████████▄▄▄███████▌░░░░░▄
░▄▀░██████████████████▌▀▄░░░░
▀░░░█████▀▀░░░▀███████░░░▀▄░░
░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░
░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀
░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░
░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░
░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░
░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═╝░

*/