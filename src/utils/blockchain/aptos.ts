import {AptosClient} from "aptos";


class Aptos {
    private client: any;
    private pullEventsQueue: any[];
    private url: string;

    constructor() {
        this.client = null;
        this.pullEventsQueue = [];
        this.getEvent = this.getEvent.bind(this);
        this.pullEvents();
    }

    async updateClient(url) {
        this.client = new AptosClient(url);
        this.url = url;
    }

    async getBalance(address) {
        if (!!this.client && !!address) {
            let resources = await this.client.getAccountResources(address);
            if (!!resources.find) {
                let accountResource = resources.find((r) => r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>");
                return accountResource.data.coin.value;
            }
        }
        return -1;
    }

    pullEvents() {
        const pool = async () => {
            if (this.pullEventsQueue.length > 0) {
                const {
                    resolve,
                    url
                } = this.pullEventsQueue.pop();
                // resolve(await fetch(url));
            }
            setTimeout(pool, 1500);
        }
        setTimeout(pool, 1500);
    }

    async getEvent(address, sender, eventHandleStruct, fieldName, from, limit) {
        const promise = new Promise(async (resolve, reject) => {
            let url = this.url + "/accounts/" + sender.replace("0x", "")
                + "/events/" + address + "::" + eventHandleStruct
                + "/" + fieldName
                + "?start=" + String(from)
                + "&&limit=" + String(limit)
            this.pullEventsQueue.unshift({
                resolve,
                url
            })
        });
        return promise;
    }
}

export default new Aptos()


export const PRICE = 5.09;
export const PRECISION = Math.pow(10, 8);
export const toDisplayValue = (value: number) => {
    return (value / PRECISION).toFixed(2).toString()
}