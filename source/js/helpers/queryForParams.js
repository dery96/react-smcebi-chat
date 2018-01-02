const queryForParams = (data) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
    }
    return params
};

export default queryForParams;
