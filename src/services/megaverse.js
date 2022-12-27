import { createCometh } from './comeths'
import { createPolyanet } from './polyanets'
import { createSoloons } from './soloons'

export const createGoal = async ({ column, row, entitieStr }) => {
  const [direction = ''] = entitieStr.split('_')
  const [color = ''] = entitieStr.split('_')

  if (entitieStr === 'POLYANET') {
    await createPolyanet({ column, row })
  } else if (entitieStr.indexOf('COMETH') > -1) {
    await createCometh({ column, row, direction: direction?.toLowerCase() })
  } else if (entitieStr.indexOf('SOLOON') > -1) {
    await createSoloons({ column, row, color: color?.toLowerCase() })
  }
}
