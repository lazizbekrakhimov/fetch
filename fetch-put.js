async function putData(url, data) {
    const response = await fetch(url, {
        method:'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

putData('https://68ee18dedf2025af7802588f.mockapi.io/all/7', {
    name: 'Updated Powerbank', 
    price: 29.99,
    id: 7
})
    .then(data => console.log('Data updated successfully:', data))
    .catch(err => console.log('Error updating data:', err));