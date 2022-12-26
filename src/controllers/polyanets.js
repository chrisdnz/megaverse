import { createX } from '../utils/createX'
import { createPolyanet, deletePolyanet } from '../services/polyanets'

const createXPolyanets = async (_, resp, next) => {
  try {
    const coordinates = createX(2, 8, 11)
    coordinates.forEach(async coord => {
      await delay(0.5)
      const apiResponse = await createPolyanet(coord)
      if (apiResponse.reason) {
        next(
          Error(
            `Error when sending row: ${coord.row} | column: ${
              coord.column
            } \n ${JSON.stringify(apiResponse.reason)}`
          )
        )
      }
    })
    resp.status(200).send({
      message: 'polyanets with shape X created succesfully',
      coordinates
    })
  } catch (error) {
    next(error)
  }
}

const resetPolyanets = async (req, resp, next) => {
  try {
    console.log(req.body)
    const { coordinates } = req.body

    // Send coords to Megaverse API
    coordinates.forEach(async coord => {
      await delay(0.5)
      // Send coord to Megaverse API
      const apiResponse = await deletePolyanet(coord)
      if (apiResponse.reason) {
        next(
          Error(
            `Error when sending row: ${coord.row} | column: ${
              coord.column
            } \n ${JSON.stringify(apiResponse.reason)}`
          )
        )
      }
    })

    resp.status(200).send({
      message: 'polyanets reset successfully'
    })
  } catch (error) {
    next(error)
  }
}

export { createXPolyanets, resetPolyanets }
