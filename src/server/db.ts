import { MongoClient } from "mongodb"
import { MONGOUB_URI, DATABASE_NAME} from "./config"

let connectedClient;

export const connectClient = async () => {

    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME)
    }
    
    const client = new MongoClient(MONGOUB_URI)
    await client.connect() //async
    await client.db(DATABASE_NAME).command({ ping: 1 })
    console.info("Connected to Mongo")
    
    connectedClient = client;

    return connectedClient.db(DATABASE_NAME)
}

export const stopClient = async () => {
    await connectedClient?.close();
}

