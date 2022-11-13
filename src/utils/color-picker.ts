import { Color, ColorSpace, Ran } from '../classes/type-definitions.js';

const colorPicker = {
  purple: [
    [159, 43, 104],
    [191, 64, 191],
    [128, 0, 32],
    [112, 41, 99],
    [170, 51, 106],
    [48, 25, 52],
    [72, 50, 72],
    [93, 63, 211],
    [203, 195, 227],
    [207, 159, 255],
    [170, 152, 169],
    [224, 176, 255],
    [145, 95, 109],
    [119, 7, 55],
    [218, 112, 214],
    [195, 177, 225],
    [204, 204, 255],
    [103, 49, 71],
    [169, 92, 104],
    [128, 0, 128],
    [81, 65, 79],
    [149, 53, 83],
    [216, 191, 216],
    [99, 3, 48],
    [127, 0, 255],
    [114, 47, 55],
    [189, 181, 213]
  ],
  pink: [
    [159, 43, 104],
    [222, 49, 99],
    [129, 19, 49],
    [255, 127, 80],
    [248, 131, 121],
    [220, 20, 60],
    [170, 51, 106],
    [201, 169, 166],
    [255, 0, 255],
    [255, 105, 180],
    [255, 182, 193],
    [255, 0, 255],
    [119, 7, 55],
    [255, 16, 240],
    [218, 112, 214],
    [248, 200, 220],
    [250, 160, 160],
    [255, 192, 203],
    [248, 152, 128],
    [103, 49, 71],
    [169, 92, 104],
    [128, 0, 128],
    [227, 11, 92],
    [149, 53, 83],
    [243, 58, 106],
    [224, 191, 184],
    [194, 30, 86],
    [224, 17, 95],
    [250, 128, 114],
    [216, 191, 216],
    [227, 115, 131]
  ],
  red: [
    [136, 8, 8],
    [170, 74, 68],
    [238, 75, 43],
    [165, 42, 42],
    [128, 0, 32],
    [110, 38, 14],
    [204, 85, 0],
    [233, 116, 81],
    [112, 41, 99],
    [210, 43, 43],
    [196, 30, 58],
    [215, 0, 64],
    [222, 49, 99],
    [210, 4, 45],
    [149, 69, 53],
    [129, 19, 49],
    [248, 131, 121],
    [129, 65, 65],
    [220, 20, 60],
    [139, 0, 0],
    [123, 24, 24],
    [154, 42, 42],
    [192, 64, 0],
    [128, 0, 0],
    [152, 104, 104],
    [119, 7, 55],
    [255, 49, 49],
    [74, 4, 4],
    [250, 160, 160],
    [236, 88, 0],
    [227, 83, 53],
    [169, 92, 104],
    [227, 11, 92],
    [255, 0, 0],
    [165, 42, 42],
    [145, 56, 49],
    [255, 68, 51],
    [149, 53, 83],
    [194, 30, 86],
    [224, 17, 95],
    [128, 70, 27],
    [250, 128, 114],
    [255, 36, 0],
    [250, 95, 85],
    [227, 115, 94],
    [124, 48, 48],
    [99, 3, 48],
    [164, 42, 4],
    [227, 66, 52],
    [114, 47, 55]
  ],
  orange: [
    [255, 191, 0],
    [255, 172, 28],
    [205, 127, 50],
    [218, 160, 109],
    [204, 85, 0],
    [233, 116, 81],
    [227, 150, 62],
    [242, 140, 40],
    [210, 125, 45],
    [184, 115, 51],
    [255, 127, 80],
    [248, 131, 121],
    [139, 64, 0],
    [250, 213, 165],
    [228, 155, 15],
    [255, 192, 0],
    [218, 165, 32],
    [255, 213, 128],
    [192, 64, 0],
    [244, 187, 68],
    [255, 222, 173],
    [255, 95, 31],
    [204, 119, 34],
    [255, 165, 0],
    [250, 200, 152],
    [255, 229, 180],
    [236, 88, 0],
    [248, 152, 128],
    [227, 83, 53],
    [255, 117, 24],
    [255, 68, 51],
    [255, 95, 21],
    [250, 128, 114],
    [160, 82, 45],
    [250, 95, 85],
    [240, 128, 0],
    [227, 115, 94],
    [255, 170, 51]
  ],
  yellow: [
    [255, 191, 0],
    [225, 193, 110],
    [255, 234, 0],
    [253, 218, 13],
    [255, 255, 143],
    [223, 255, 0],
    [228, 208, 10],
    [139, 128, 0],
    [250, 213, 165],
    [194, 178, 128],
    [238, 220, 130],
    [228, 155, 15],
    [255, 215, 0],
    [255, 192, 0],
    [218, 165, 32],
    [252, 245, 95],
    [248, 222, 126],
    [240, 230, 140],
    [250, 250, 51],
    [251, 236, 93],
    [244, 187, 68],
    [255, 219, 88],
    [250, 218, 94],
    [255, 250, 160],
    [255, 229, 180],
    [201, 204, 63],
    [180, 196, 36],
    [147, 197, 114],
    [244, 196, 48],
    [243, 229, 171],
    [196, 180, 84],
    [245, 222, 179],
    [255, 255, 0],
    [255, 170, 51]
  ],
  green: [
    [0, 255, 255],
    [127, 255, 212],
    [69, 75, 27],
    [8, 143, 143],
    [170, 255, 0],
    [95, 158, 160],
    [9, 121, 105],
    [175, 225, 175],
    [223, 255, 0],
    [228, 208, 10],
    [0, 255, 255],
    [2, 48, 32],
    [125, 249, 255],
    [80, 200, 120],
    [95, 133, 117],
    [79, 121, 66],
    [34, 139, 34],
    [124, 252, 0],
    [0, 128, 0],
    [53, 94, 59],
    [0, 163, 108],
    [42, 170, 138],
    [76, 187, 23],
    [144, 238, 144],
    [50, 205, 50],
    [71, 135, 120],
    [11, 218, 81],
    [152, 251, 152],
    [138, 154, 91],
    [15, 255, 80],
    [128, 128, 0],
    [193, 225, 193],
    [201, 204, 63],
    [180, 196, 36],
    [147, 197, 114],
    [150, 222, 209],
    [138, 154, 91],
    [46, 139, 87],
    [159, 226, 191],
    [0, 158, 96],
    [0, 255, 127],
    [0, 128, 128],
    [64, 224, 208],
    [196, 180, 84],
    [64, 181, 173],
    [64, 130, 109]
  ],
  blue: [
    [0, 255, 255],
    [137, 207, 240],
    [0, 0, 255],
    [115, 147, 179],
    [8, 143, 143],
    [0, 150, 255],
    [95, 158, 160],
    [0, 71, 171],
    [100, 149, 237],
    [0, 255, 255],
    [0, 0, 139],
    [111, 143, 175],
    [20, 52, 164],
    [125, 249, 255],
    [96, 130, 182],
    [0, 163, 108],
    [63, 0, 255],
    [93, 63, 211],
    [173, 216, 230],
    [25, 25, 112],
    [0, 0, 128],
    [31, 81, 255],
    [167, 199, 231],
    [204, 204, 255],
    [182, 208, 226],
    [150, 222, 209],
    [65, 105, 225],
    [15, 82, 186],
    [159, 226, 191],
    [135, 206, 235],
    [70, 130, 180],
    [0, 128, 128],
    [64, 224, 208],
    [4, 55, 242],
    [64, 181, 173],
    [8, 24, 168]
  ]
};

export const getColorSpace = (key: Ran<12>) => {
  const map = {
    0: ColorSpace.red,
    1: ColorSpace.red,
    2: ColorSpace.orange,
    3: ColorSpace.orange,
    4: ColorSpace.yellow,
    5: ColorSpace.yellow,
    6: ColorSpace.green,
    7: ColorSpace.green,
    8: ColorSpace.blue,
    9: ColorSpace.blue,
    10: ColorSpace.purple,
    11: ColorSpace.pink
  };

  return map[key];
};

export const calculateColors = (colorSpace: ColorSpace, times: number): Array<Color> => {
  const map = {
    [ColorSpace.purple]: colorPicker.purple,
    [ColorSpace.pink]: colorPicker.pink,
    [ColorSpace.red]: colorPicker.red,
    [ColorSpace.orange]: colorPicker.orange,
    [ColorSpace.yellow]: colorPicker.yellow,
    [ColorSpace.green]: colorPicker.green,
    [ColorSpace.blue]: colorPicker.blue
  };

  const arr = map[colorSpace];
  const colors: Array<Color> = [];

  for (let i = 0; i < times; i++) {
    const colorCode = arr[Math.floor(Math.random() * arr.length)];
    colors.push({
      red: colorCode[0],
      green: colorCode[1],
      blue: colorCode[2]
    });
  }

  return colors;
};