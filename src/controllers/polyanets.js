import fetch from 'node-fetch';

import { createX } from '../utils/createX';
import { config } from '../config';

const resourceName = 'polyanets';

const createXPolyanets = async (_, resp, next) => {
  try {
    const coordinates = createX(2, 8, 11);
    coordinates.forEach(async (coord) => {
      const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
        body: JSON.stringify({
          ...coord,
          candidateId: config.userId,
          delay: 0
        })
      };
      console.info(`Sending row: ${coord.row} | column: ${coord.column}`)
      // Send coord to Megaverse API
      const apiResponse = await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json();
      if (apiResponse.reason) {
        next(Error(`Error when sending row: ${coord.row} | column: ${coord.column} \n ${JSON.stringify(apiResponse.reason)}`))
      }
    });
    resp.status(200).send({
      message: 'polyanets with shape X created succesfully',
      coordinates
    })
  } catch (error) {
    next(error);
  }
};

const resetPolyanets = async (req, resp, next) => {
  try {
    console.log(req.body);
    const { coordinates } = req.body;
    
    // Send coords to Megaverse API
    coordinates.forEach(async (coord) => {
      const options = {
        method: 'DELETE',
        header: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          ...coord,
          candidateId: config.userId,
        }),
        delay: 0
      };

      console.info(`Sending row: ${coord.row} | column: ${coord.column}`)
      // Send coord to Megaverse API
      const apiResponse = await (await fetch(`${config.apiUrl}/${resourceName}`, options)).json();
      if (apiResponse.reason) {
        next(Error(`Error when sending row: ${coord.row} | column: ${coord.column} \n ${JSON.stringify(apiResponse.reason)}`))
      }
    });

    resp.status(204).send({
      message: 'polyanets reset successfully',
    })
  } catch (error) {
    next(error);
  }
};

export {
  createXPolyanets,
  resetPolyanets
}
