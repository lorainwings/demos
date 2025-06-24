import { build } from 'vite'
import { getEnterPages } from './utils.mjs'
import { getDefineConfig } from './config.mjs'

const input = await getEnterPages()
const config = await getDefineConfig(input)
await build(config)
