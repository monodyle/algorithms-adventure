/*
 * Problem:
 *  Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm (https://en.wikipedia.org/wiki/Box_blur) to the photo to hide its content.
 *  The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel `x` in the output image has a value equal to the average value of the pixel values from the `3 × 3` square that has its center at `x`, including `x` itself. All the pixels on the border of `x` are then removed.
 *  Return the blurred image as an integer, with the fractions rounded down.
 * Example:
 *  For [[1, 1, 1],
 *       [1, 7, 1],
 *       [1, 1, 1]]
 *  the output should be `[[1]]`
 *  To get the value of the middle pixel in the input `3 × 3` square: `(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1`
 *  The border pixels are cropped from the final result.
 *
 *  For [[7, 4, 0, 1],
 *       [5, 6, 2, 2],
 *       [6, 10, 7, 8],
 *       [1, 4, 2, 0]]
 *  the output should be [[5, 4],
 *                        [4, 4]]
 *  There are four `3 × 3` squares in the input image, so there should be four integers in the blurred output.
 *  To get the first value: `(7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5`
 *  The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.
 */

function boxBlur(image: number[][]): number[][] {
  let result: number[][] = image.slice(1, -1).map(e => e.slice(1, - 1))

  return result.map((row, i) =>
    row.map((el, j) => {
      let sum: number = 0
      for (let x: number = 0; x < 3; ++x)
        for (let y: number = 0; y < 3; ++y)
          sum += image[i + x][j + y]
      return sum / 9 | 0
    })
  )
}

export { boxBlur }