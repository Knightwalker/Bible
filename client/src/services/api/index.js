import { useRef } from "react";

const baseUrl = "http://localhost:5000";

const useGet = () => {
    const isCancelled = useRef(false);

    const makeRequest = async ({ endpoint }) => {
        const url = baseUrl + endpoint;

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (isCancelled.current) {
                    return reject({ isCancelled: true });
                }
                resolve(data);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };

    const cancelRequest = () => {
        isCancelled.current = true;
    };

    return [makeRequest, cancelRequest];
}

const usePost = () => {
    const isCancelled = useRef(false);

    const makeRequest = async ({ endpoint, payload = {} }) => {
        const url = baseUrl + endpoint;
        return new Promise(async (resolve, reject) => {
            try {
                debugger;
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                debugger;
                const data = await response.json();
                if (isCancelled.current) {
                    return reject({ isCancelled: true });
                }
                resolve(data);
            } catch (error) {
                debugger;
                console.log(error);
                reject(error);
            }
        });
    };

    const cancelRequest = () => {
        isCancelled.current = true;
    };

    return [makeRequest, cancelRequest];
}

export {
    useGet,
    usePost
}