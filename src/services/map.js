import fetch from 'node-fetch'

import { config } from '../config'

export const getMap = async () => {
  const response = await (
    await fetch(`${config.apiUrl}/${config.userId}/map`)
  ).json()
  return response
}
