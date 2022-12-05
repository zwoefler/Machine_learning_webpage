import fs from 'node:fs'

export default defineEventHandler((event, audioFile) => {
    return fs.readFileSync(audioFile)
})