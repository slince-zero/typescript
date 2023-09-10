let arrY: [number, boolean] = [1, false]

type first = (typeof arrY)[0] // number
type first2 = (typeof arrY)[1] // boolean
