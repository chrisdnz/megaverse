import fetch from 'node-fetch'

import { config } from '../config'

const resourceName = 'soloons'

export const createSoloons = async ({ column, row, color }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      column,
      color,
      candidateId: config.userId,
      delay: 0,
      row
    })
  }
  console.info(`Sending row: ${row} | column: ${column}`)
  // Send data to Megaverse API
  return await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json()
}

export const deleteSoloons = async ({ column, row }) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      column,
      candidateId: config.userId,
      delay: 0,
      row
    })
  }
  console.info(`Deleting row: ${row} | column: ${column}`)
  // Send data to Megaverse API
  return await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json()
}
