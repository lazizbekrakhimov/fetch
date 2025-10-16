async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

postData('https://68ee18dedf2025af7802588f.mockapi.io/all', {
    name: 'Unbelievable Powerbank',
    price: 29.99, 
    id: 7
})
    .then(data => console.log('Data posted successfully:', data))
    .catch(err => console.error('Error posting data: ', err))