import axios from 'axios';

export class Ajax {
    constructor() {
        this.API_KEY = `f9fc41eZDXLsGMu8fQVZ6SeuLjP9zk3zOUiwxGqiqaDTlYkNCNviCwaN`;
        this.MAIN_URL = `https://api.happi.dev/v1/music`;
        this.config = {
            method: 'get',
            url: this.MAIN_URL,
            headers: { 'x-happi-key': this.API_KEY },
            timeout: 10000
        };
    }

    set endpoint(endpoint) {
        this.config.url = this.MAIN_URL;
        this.config.url = `${this.config.url}${endpoint}`;
    }

    async makeRequest() {
        try {
            // console.log(`request ${this.config.url}`);
            let request = await axios(this.config);
            let response = request.data;
            if (response) {
                return Promise.resolve(response.result);
            } else {
                throw Error(`Error because ${response.error}`);
            }
        } catch (error) {
            return Promise.reject(error.message);
        }
    }
}
