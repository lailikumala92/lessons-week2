let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770736-8031 x56442",
    website: "hildegard.org"
}


let newData = {...data, name: 'Laili Kumala', email: 'lailikumala92@gmail', hobbies: ['jogging', 'listening to music', 'martial art', 'designing', 'touring']}
console.log(newData);



let biodata = (data)=> {
    let {
        name,
        email,
        address
    } = data


    console.log(`${address.street}, ${address.city}`);
}
biodata(data)




