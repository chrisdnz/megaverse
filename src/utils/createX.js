/**
 * Create 🪐 POLYanets forming an X-Shape on a 11x11 matrix
 * by filling in X1 and X2 over 8 rows in the matrix
 * @returns {[
 *  {
 *    column: string,
 *    row: string
 *  }
 * ]} objects list with coordinates
 */
export const createX = (startRow = 0, area = 0, matrixSize = 0) => {
  const coords = []
  for (let i = startRow; i <= area; i++) {
    const x1 = {
      column: i,
      row: i
    }
    const x2 = {
      column: matrixSize - 1 - i,
      row: i
    }
    coords.push(x1)
    coords.push(x2)
  }
  return coords
}
