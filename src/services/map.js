import fetch from 'node-fetch'

import { config } from '../config'

export const getMap = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
  }
  const response = await (
    await fetch(`${config.apiUrl}/map/${config.userId}/goal`, options)
  ).json()
  return response
}
