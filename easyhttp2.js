/**
*   EasyHTTP Library
*   Library for making HTTP requests
*
*   @version 2.0.0
*   @author Michel Motta
*   @license MIT
**/

class EasyHTTP {
    // Make HTTP GET request
    get(url) {
        return new Promise((res, rej) => {
            fetch(url)
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        })
    }
    
    // Make HTTP POST request
    post(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        })
    }

    // Make HTTP PUT request
    put(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        })
    }

    // Make HTTP DELETE request
    delete(url) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(() => res('User deleted'))
                .catch(err => rej(err));
        })
    }
}