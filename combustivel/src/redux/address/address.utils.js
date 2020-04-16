export const addAddress = (addresses, addressToAdd) => {

    const existingAddresses = adresses.find(
        address => address.id === addressToAdd.id
        );

        if(existingCartItem){
            return addresses.map(address => 
                address.id === addressToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
            }

        return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
