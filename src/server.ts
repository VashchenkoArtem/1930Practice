import { createApp } from "./app";
import { config } from "./config";


createApp(config).listen(config.port, () => {
    console.log(`API listeting on ${config.port}`)
})