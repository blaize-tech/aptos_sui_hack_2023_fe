import aptos from "@utils/blockchain/aptos";
import "./hackaton_quick_env";

export async function InitAptos() {
    console.log("env", process.env)
    aptos.updateClient(process.env.NEXT_APTOS_NODE_URL)
}

export async function UpdateInfo(store) {

}