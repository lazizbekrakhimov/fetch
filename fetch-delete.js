async function deleteData(url) {
    const response = await fetch(url, {
        method: 'DELETE'
    })
    return response.json();
}

deleteData('https://68ee18dedf2025af7802588f.mockapi.io/all/7')
    .then(data => console.log('Data deleted successfully:', data))