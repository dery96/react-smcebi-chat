export default queryForParams = (data) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
        console.log(`${key} ${value}`);
    }
    return params
}
