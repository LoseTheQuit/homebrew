export function get(url) {

    return fetch(url)
        .then((response) => response.json());
}

export function searchFor(query) {

    const requestURL = ('https://flonoware.herokuapp.com/{query}');

    return get(requestURL)
        .then((res) => {
            const coords = res.coords ? res.coords.items : [];
            return coords
        });
}
