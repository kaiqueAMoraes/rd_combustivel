import axios from 'axios';

export const loadAddressInfo = (idUser) => {
        alert(idUser)
        let addresses = []
        axios.get(`http://localhost:8080/find-address-byuser/${idUser}`)
            .then(response => {
                addresses = [...response.data]
            }).catch(error => {
                console.log(error)
            });

            return addresses;
}

