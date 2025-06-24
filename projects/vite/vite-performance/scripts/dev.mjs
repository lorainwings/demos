import { createServer } from 'vite'
import { getEnterPages } from './utils.mjs'
import { getDefineConfig } from './config.mjs'

const input = await getEnterPages()
const config = await getDefineConfig(input)
const server = await createServer(config)

await server.listen()
server.printUrls()
