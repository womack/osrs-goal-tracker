export function getMoney() {

    return new Promise((resolve, reject) => {
        fetch("/api/money")
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    })
}

export function addMoney(value) {

    return new Promise((resolve, reject) => {
        fetch("/api/money", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify({value})
            })
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    })
}