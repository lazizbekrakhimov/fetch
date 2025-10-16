// GET
// fetch('https://68ee18dedf2025af7802588f.mockapi.io/all')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Error on getting all items', err))


// GET by ID
// fetch('https://68ee18dedf2025af7802588f.mockapi.io/all/1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Error on getting by ID', err))


// POST
// fetch('https://68ee18dedf2025af7802588f.mockapi.io/all', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Unbelievable Item',
//         price: 1999.99,
//         id: 7
//     })
// })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error on creating item', err))


// PUT
// fetch('https://68ee18dedf2025af7802588f.mockapi.io/all/7', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Unbelievable Gadget',
//         price: 299.99,
//         id: 7
//     })
// })

//    .then(res => res.json())
//    .then(data => console.log(data))
//    .catch(err => console.log('Error on putting item', err))


// DELETE
// fetch('https://68ee18dedf2025af7802588f.mockapi.io/all/7', {
//     method: 'DELETE',
//     headers: {
//         'Content-Type' : 'application/json'
//     }
// })

//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(() => console.log('Item deleted successfully'))