import { getMap } from '../services/map'
import { createGoal } from '../services/megaverse'
import { delay } from '../utils/delay'

export const createMegaverse = async (req, res, next) => {
  const goalMap = await getMap()
  const goal = goalMap?.goal

  if (goal) {
    for (let row = 0; row < goal.length; row++) {
      for (let column = 0; column < goal[row].length; column++) {
        await delay(0.5)
        await createGoal({ column, row, entitieStr: goal[row][column] })
      }
    }
  }

  res.status(204).send('Processing...')
}
