const VALIDA = {
    CPF : validacpf = (strCPF) => {

        var Soma;
        var Resto;
        Soma = 0;
        let aux = [];
        let arrCPF = strCPF.split('');
    
        for (let i = 0; i <= arrCPF.length; i++) {
            let n = i+1;
            if(parseInt(arrCPF[n]) === parseInt(arrCPF[i])){
                aux.push(arrCPF[n]);
                for (let a = 0; a <= 4; a++) {
                    n++
                    if (parseInt(arrCPF[n]) === undefined || parseInt(arrCPF[n]) === NaN) {
                        false;
                    } else {
                        parseInt(arrCPF[n]) === parseInt(arrCPF[i]) ?
                            aux.push(arrCPF[n])
                            :
                            false
                    }
                    if(aux.length >= 3) {
                        i = arrCPF.length
                    }
                }
            }else false;
        }
    
        if(aux.length >= 3) return false;
    
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
    IS_EMPTY : check_empty_text_in_array = arr => {
        let val = false;
        if (arr.length === 0) {return val} else {
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === ""){
                    val = true;
                }
            }
        }
        return val;
    }, 
    IS_EQUAL_PASSWORD : check_if_passwords_are_equal = (first_pass, second_pass) => {
        return first_pass !== second_pass
    }
}



export default VALIDA_CPF; 