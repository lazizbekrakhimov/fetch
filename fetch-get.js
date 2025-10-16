async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

getData('https://68ee18dedf2025af7802588f.mockapi.io/all')
    .then(data => console.log(data))
    .catch(err => console.error('Error getting all data:', err));


// GET by ID

// getData('https://68ee18dedf2025af7802588f.mockapi.io/all/1')
//     .then(data => console.log(data))
//     .catch(err => console.error('Error getting data by ID:', err));