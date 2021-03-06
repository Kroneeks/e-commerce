export default {
  users: [
    { username: "regular", accessLevel: 1, password: "password" },
    { username: "admin", accessLevel: 0, password: "password" },
  ],
  initCatalogs: [
    {
      _id: '1',
      title: 'Женская обувь',
      productsId: [1, 2, 3, 11, 12],
    },
    {
      _id: '2',
      title: 'Мужская обувь',
      productsId: [5, 6, 7, 13],
    },
    {
      _id: '3',
      title: 'Спортивная обувь',
      productsId: [1, 5, 6],
    },
    {
      _id: '4',
      title: 'Детская обувь',
      productsId: [8, 9, 14],
    },
    {
      _id: '5',
      title: 'Аксессуары',
      productsId: [10, 15, 16],
    },
    {
      _id: '6',
      title: 'Лучшая цена',
      productId: 8,
    },
    {
      _id: '7',
      title: 'Скидки',
      productsId: [1, 3, 5, 7, 9, 11, 13],
    },
    {
      _id: '8',
      title: 'Лето',
      productsId: [1, 5, 7, 4],
    },
    {
      _id: '9',
      title: 'Тёплая обувь',
      productsId: [3, 8, 4, 12],
    },
    {
      _id: '10',
      title: 'Полуботинки',
      productsId: [4, 5, 6],
    },
    {
      _id: '11',
      title: 'Популярное',
      productsId: [1, 5, 6, 7, 9],
    },
  ],
  initProducts: [
    {
      _id: '1',
      name: "Кроссовки Sampi",
      companyName: "Sampi",
      platformHeight: "Низкая, 3.0 см",
      dimension: "Большемерная",
      material: "Кожа",
      composition: "текстиль",
      stock: 10,
      stockPrice: 5600,
      currentPrice: 3920,
      article: 87035,
      sizes: [34, 35, 36],
      colors: ["brown", "ginger", "purple"],
      previewUrl: '12548903.jpg',
      images: {
        brown: ['12548903.jpg', '12548904.jpg','12548905.jpg','12548906.jpg'],
        ginger: ['12548907.jpg', '12548908.jpg','12548905.jpg','12548909.jpg'],
        purple: ['12548911.jpg', '12548910.jpg','12548905.jpg','12548912.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '2',
      name: "Женские туфли",
      companyName: "Vita",
      material: "Текстиль",
      composition: "искусственная замша",
      stock: 0,
      stockPrice: 8000,
      currentPrice: 7000,
      article: 57004,
      sizes: [36, 37, 38],
      colors: ["pink", "brown"],
      previewUrl: '475965.png',
      images: {
        pink: ['475965.png'],
        brown: ['141425.png'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '3',
      name: "Туфли женские",
      companyName: "Amplies",
      platformHeight: "-",
      dimension: "-",
      material: "Искусственный материал",
      composition: "натуральная кожа",
      stock: 10,
      stockPrice: 7400,
      currentPrice: 6950,
      article: 57016,
      sizes: [35, 36, 37],
      colors: ["beige", "brown", "pink", "purple"],
      previewUrl: '10549051.jpg',
      images: {
        beige: ['10549051.jpg', '10549050.jpg','10549049.jpg','10549048.jpg'],
        brown: ['10549064.jpg', '10549053.jpg','10549054.jpg','10549055.jpg'],
        pink: ['10549056.jpg', '10549057.jpg','10549058.jpg','10549059.jpg'],
        purple: ['10549063.jpg', '10549062.jpg','10549061.jpg','10549060.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '4',
      name: "Кроссовки Sampi",
      companyName: "Sampi",
      platformHeight: "Низкая, 3.0 см",
      dimension: "Большемерная",
      material: "Кожа",
      composition: "текстиль",
      stock: 10,
      stockPrice: 5600,
      currentPrice: 3920,
      article: 87035,
      sizes: [34, 35, 36],
      colors: ["brown", "ginger", "purple"],
      previewUrl: '12548903.jpg',
      images: {
        brown: ['12548903.jpg', '12548904.jpg','12548905.jpg','12548906.jpg'],
        ginger: ['12548907.jpg', '12548908.jpg','12548905.jpg','12548909.jpg'],
        purple: ['12548911.jpg', '12548910.jpg','12548905.jpg','12548912.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '5',
      name: "Кроссовки W965541",
      companyName: "Kisne",
      platformHeight: "Низкая, 3.0 см",
      dimension: "Большемерная",
      material: "Кожа",
      composition: "текстиль",
      stock: 10,
      stockPrice: 7250,
      currentPrice: 6490,
      article: 57037,
      sizes: [34, 35, 36],
      colors: ["black"],
      previewUrl: '1.png',
      images: {
        black: ['1.png'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '6',
      name: "Топсайдеры из нубука",
      companyName: "Delta",
      platformHeight: "1 см",
      material: "Кожа",
      composition: "нубук",
      stock: 0,
      stockPrice: 5680,
      currentPrice: 5396,
      article: 57127,
      sizes: [34, 35, 36],
      colors: ["blue", "green", "brown"],
      previewUrl: '4.png',
      images: {
        blue: ['4.png'],
        green: ['141422.png'],
        brown: ['141423.png'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '7',
      name: "Туфли H531554",
      companyName: "Allofoan",
      platformHeight: "Cредняя, 1.0 см",
      material: "Кожа",
      composition: "натуральная замша 100%",
      stock: 10,
      stockPrice: 5680,
      currentPrice: 5396,
      article: 57127,
      sizes: [40, 41, 42, 43, 44, 45, 48],
      colors: ["brown", "beige", "purple"],
      previewUrl: '184158.jpg',
      images: {
        brown: ['184158.jpg', '125488781_0.jpg'],
        beige: ['1054843.jpg', '125488782_0.jpg'],
        purple: ['1054844.jpg', '125488784_0.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '8',
      name: "Сандалии M963552",
      companyName: "Eszett",
      material: "Искусственный материал",
      composition: "EVA",
      stock: 10,
      stockPrice: 1840,
      currentPrice: 1656,
      article: 57127,
      sizes: [23, 24, 28, 29, 30],
      colors: ["beige", "brown", "purple"],
      previewUrl: '1932.jpg',
      images: {
        beige: ['1932.jpg', '1934.jpg', '1933.jpg'],
        brown: ['1937.jpg', '1936.jpg', '1935.jpg'],
        purple: ['1938.jpg', '1940.jpg', '1939.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '9',
      name: "Кроссовки M96555441",
      companyName: "Zeta",
      material: "Текстиль",
      composition: "текстиль",
      stock: 10,
      stockPrice: 1390,
      currentPrice: 1251,
      article: 57068,
      sizes: [23, 25, 26, 27, 28, 29, 30],
      colors: ["blue", "brown", "purple"],
      previewUrl: '184173.jpg',
      images: {
        blue: ['184173.jpg', '5665473.jpg'],
        brown: ['1941.jpg', '1942.jpg'],
        purple: ['1944.jpg', '1943.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '10',
      name: "Рюкзак M96542",
      companyName: "Merga",
      material: "натуральная кожа, полиэстер",
      stock: 10,
      stockPrice: 1390,
      currentPrice: 1251,
      article: 25656,
      colors: ["brown", "grey", "beige", "blue"],
      previewUrl: '12548895.jpg',
      images: {
        brown: ['12548895.jpg'],
        grey: ['1525485.jpg'],
        beige: ['1525483.jpg'],
        blue: ['1525484.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '11',
      name: "Кроссовки женские D96351",
      companyName: "Venelus",
      material: "натуральная кожа, полиэстер",
      stock: 10,
      stockPrice: 1390,
      currentPrice: 1251,
      article: 57033,
      sizes: [34, 35, 36],
      colors: ["pink", "grey", "purple"],
      previewUrl: '12235.jpg',
      images: {
        pink: ['12235.jpg', '1545154.jpg', '1545153.jpg', '1545152.jpg'],
        grey: ['1545155.jpg', '1545158.jpg', '1545157.jpg', '1545156.jpg'],
        purple: ['1545162.jpg', '1545161.jpg', '1545160.jpg', '1545159.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '12',
      name: "Ботильоны из велюра на меху",
      companyName: "Digamma",
      material: "мех натуральный",
      stock: 10,
      stockPrice: 11500,
      currentPrice: 10210,
      article: 57125,
      sizes: [34, 35, 36],
      colors: ["blue", "grey"],
      previewUrl: '7.png',
      images: {
        blue: ['7.png'],
        grey: ['141426.png'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '13',
      name: "Бутсы мужские P99668541",
      companyName: "Hekiu",
      material: "100 % полиуретан",
      stock: 10,
      stockPrice: 11500,
      currentPrice: 10210,
      article: 56992,
      sizes: [38, 39, 40, 41, 42],
      colors: ["brown", "grey"],
      previewUrl: '1054845.jpg',
      images: {
        blue: ['1054845.jpg', '1054847.jpg'],
        grey: ['1054851.jpg', '1054852.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '14',
      name: "Кроссовки 280 RT",
      companyName: "Venelus",
      material: "100 % полиуретан",
      stock: 10,
      stockPrice: 11500,
      currentPrice: 10210,
      article: 57095,
      sizes: [38, 39, 40, 41, 42],
      colors: ["purple", "grey"],
      previewUrl: '1917.jpg',
      images: {
        purple: ['1917.jpg', '1918.jpg', '1919.jpg'],
        grey: ['1922.jpg', '1921.jpg', '1920.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '15',
      name: "Рюкзак F78562",
      companyName: "Tosca Blu",
      material: "натуральная кожа",
      stock: 10,
      stockPrice: 11500,
      currentPrice: 10210,
      article: 25662,
      colors: ["black", "pink", "white"],
      previewUrl: '12548893.jpg',
      images: {
        black: ['12548893.jpg', '1525518.jpg'],
        pink: ['12548893.jpg', '1525518.jpg'],
        white: ['12548893.jpg', '1525518.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
    {
      _id: '16',
      name: "Бейсболка для девочек",
      companyName: "Venelus",
      material: "100 % хлопок",
      stock: 10,
      stockPrice: 11500,
      currentPrice: 10210,
      article: 57101,
      colors: ["blue", "grey", "pink"],
      previewUrl: '12548896.jpg',
      images: {
        blue: ['12548896.jpg', '225416.jpg'],
        grey: ['12548896.jpg', '225416.jpg'],
        pink: ['12548896.jpg', '225416.jpg'],
      },
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam          elis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    },
  ],
  initTags: [
    {name: "Спорт", id: 3},
    {name: "Женщинам", id: 1},
    {name: "Лето", id: 8},
    {name: "Детям", id: 4},
    {name: "Теплая обувь", id: 9},
    {name: "Полуботинки", id: 10},
  ],
  initCoupons: ["123a", "456b", "135c"],
};
