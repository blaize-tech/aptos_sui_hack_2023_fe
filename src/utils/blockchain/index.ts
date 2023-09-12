import aptos from "@utils/blockchain/aptos";
import "./hackaton_quick_env";

let initialized = false;

export async function InitAptos() {
    if (initialized)
        return;
    initialized = true;
    console.log("env", process.env)
    aptos.updateClient(process.env.NEXT_APTOS_NODE_URL)
}

export async function UpdateInfo(store) {

}