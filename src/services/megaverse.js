import { createCometh } from './comeths'
import { createPolyanet } from './polyanets'
import { createSoloons } from './soloons'

export const createGoal = ({ column, row, entitieStr }) => {
  switch (entitieStr) {
    case 'POLYANET':
      createPolyanet(column, row)
      break
    case 'COMETH':
      const [direction = ''] = entitieStr.split('_')
      createCometh(column, row, direction?.toLowerCase())
      break
    case 'SOLOON':
      const [color = ''] = entitieStr.split('_')
      createSoloons(column, row, color?.toLowerCase())
      break
    default:
      // Do nothing if it's an empty space
      break
  }
}
