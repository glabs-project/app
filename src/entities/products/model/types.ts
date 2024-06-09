export type Products = {
  id: string
  title: string
  category: string
  subCategory: string
  image: string[]
  colors: string[]
  price: number
}

export type ProductState = {
  products: Products[]
}

export type ProductsResponse = {
  category: string
  subCategories: { name: string; countItems: number }[]
  brands: string[]
  products: ProductsItems
}

export type ProductsItems = {
  [nameProducts: string]: {
    name: string
    price: string
    type: string
    characteristics: string[]
    images: string[]
  }[]
}

export enum ProductsTitle {
  guitars = 'Гитары',
  strings = 'Струны для гитары',
  amp = 'Усилители для гитары',
  pedals = 'Педали и процессоры эффектов',
  cases = 'Чехлы и кейсы для гитар',
  accessories = 'Аксессуары для гитар',
  switching = 'Коммутация'
}

export enum ProductsWord {
  'usedAcousticGuitar' = 'Акустические гитары б/у',
  'electroAcousticGuitar' = 'Полуакустические электрогитары',
  'classicalGuitar' = 'Классические гитары',
  'acousticBassGuitar' = 'Акустические бас-гитары',
  'usedBassGuitar' = 'Бас-гитары б/у',
  'acousticGuitar' = 'Акустические гитары',
  'semiAcousticGuitar' = 'Электроакустические гитары',
  'usedElectroGuitar' = 'Электрогитары б/у',
  'bassGuitar' = 'Бас-гитары',
  'electroGuitar' = 'Электрогитары',
  'bassString' = 'Струны для бас-гитары',
  'acousticString' = 'Струны для акустической гитары',
  'electroString' = 'Струны для электрогитары',
  'classicalString' = 'Струны для классической гитары',
  'cabinetAmp' = 'Кабинеты для электрогитар',
  'headAmp' = 'Усилители для электрогитар',
  'combAmp' = 'Комбоусилители для электрогитар',
  'electroPedal' = 'Педали для электрогитар',
  'bassPedal' = 'Педали для бас-гитар',
  'electroCase' = 'Чехлы для электрогитар',
  'classicCase' = 'Чехлы для классических гитар',
  'acousticCase' = 'Чехлы для акустических гитар',
  'bassCase' = 'Чехлы для бас-гитар',
}
