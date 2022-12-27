import fetch from 'node-fetch'

import { config } from '../config'

const resourceName = 'comeths'

export const createCometh = async ({ column, row, direction }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      column,
      candidateId: config.userId,
      row,
      direction
    })
  }
  console.info(`Sending row: ${row} | column: ${column}`)
  // Send data to Megaverse API
  return await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json()
}

export const deleteCometh = async ({ column, row }) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      column,
      candidateId: config.userId,
      row
    })
  }
  console.info(`Deleting row: ${row} | column: ${column}`)
  // Send data to Megaverse API
  return await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json()
}
