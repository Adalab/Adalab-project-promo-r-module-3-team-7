const dataApi = (data) => {
    return fetch('https://dev.adalab.es/api/card', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    })
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export default dataApi;