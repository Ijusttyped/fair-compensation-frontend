export async function getSalary(data) {
    console.log(data)
    const response = await fetch(`https://fair-compensation-backend.onrender.com/get_salary`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    const response_json = await response.json()
    console.log(response_json)
    return response_json;
}

export async function pingService() {
    return await fetch('https://fair-compensation-backend.onrender.com/ping', {
        method: 'GET'
    });
    // const status = response.statusCode
    // console.log("Pinged salary service. Got status code", status)
    // return response;
}