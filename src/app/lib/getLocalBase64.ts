import { getPlaiceholder } from 'plaiceholder'
import fs from 'node:fs/promises'

export default async function getBase64(imagePath: string) {
  try {
    const file = await fs.readFile(`public${imagePath}`)
    const { base64 } = await getPlaiceholder(file)

    return base64
  } catch (err) {
    console.log('Error: ', err)
  }
}
