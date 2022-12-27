const dataApi = (data) => {
    return fetch('http://localhost:4000/card/id', {
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