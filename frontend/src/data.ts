import { Banner } from "./app/shared/models/Banner";
import { Product } from "./app/shared/models/Product";
import { Catagory } from "./app/shared/models/Catagory";

const bannerPath = 'assets/img/banner/';
<<<<<<< HEAD
const productPath = 'assets/img/product/'
const catagoryPath ='assets/img/catagory/'
=======
const productPath = 'assets/img/product/';
const catagoryPath ='assets/img/catagory/';
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114

export const BANNERS: Banner[] = [
    {imageUrl: bannerPath + 'banner1.jpeg'},
    {imageUrl: bannerPath + 'banner2.gif'},
    {imageUrl: bannerPath + 'banner3.jpeg'},
    {imageUrl: bannerPath + 'banner4.jpeg'},
    {imageUrl: bannerPath + 'banner5.jpeg'},
    {imageUrl: bannerPath + 'banner6.jpeg'},
]

export const CATAGORYS: Catagory[] = [
    {
<<<<<<< HEAD
        imageUrl: catagoryPath + 'action.jpg',
        name: "Hành động",
    },
    {
        imageUrl: catagoryPath + 'art.jpg',
        name: "Mỹ thuật"
    },
    {
        imageUrl: catagoryPath + 'boardgame.jpg',
        name: "Board Game",
    },
    {
        imageUrl: catagoryPath + 'collect.jpg',
        name: "Bộ sưu tập"
    },
    {
        imageUrl: catagoryPath + 'doll.jpg',
        name: "Búp bê",
    },
    {
        imageUrl: catagoryPath + 'outdoor.jpg',
        name: "Trò chơi ngoài trời"
=======
        imageUrl: catagoryPath + 'Hoatrang.png',
        name: "Hoá trang",
    },
    {
        imageUrl: catagoryPath + 'Laprap.png',
        name: "Lắp ráp"
    },
    {
        imageUrl: catagoryPath + 'Hoatrang.png',
        name: "Hoá trang",
    },
    {
        imageUrl: catagoryPath + 'Laprap.png',
        name: "Lắp ráp"
    },
    {
        imageUrl: catagoryPath + 'Hoatrang.png',
        name: "Hoá trang",
    },
    {
        imageUrl: catagoryPath + 'Laprap.png',
        name: "Lắp ráp"
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114
    }
]

export const PRODUCTS: Product[] = [
    {
        imageUrl: productPath + '1_thumb.png',
<<<<<<< HEAD
        name: "Hộp màu",
        category: 'Mỹ thuật',
        price: 199.000,
=======

        name: "Bút lông",
        category: 'Bup be',
        price: 199.999,
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114
        id: 1,
        description: 'Description of product 1',
        star: 4,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '1b.jpg',
        name: "Toy's name",
        category: 'Con bo',
        price: 199.999,
        id: 1,
        description: 'Description of product 2',
        star: 3.5,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '1c.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 1,
        description: 'Description of product 3',
        star: 4.2,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '1d.jpg',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 1,
        description: 'Description of product 4',
        star: 4.8,
        stock: 50,
        time: new Date()

    },
    {
        imageUrl: productPath + '1e.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 1,
        description: 'Description of product 5',
        star: 4.1,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '1f.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 1,
        description: 'Description of product 1f',
        star: 4.0,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '2_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 2,
        description: 'Description of product 2a',
        star: 3.8,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '3_thumb.jpg',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 3,
        description: 'Description of product 3a',
        star: 4.5,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '4_thumb.jpg',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 4,
        description: 'Description of product 4a',
        star: 4.2,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '5_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 5,
        description: 'Description of product 5a',
        star: 4.7,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '6_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 6,
        description: 'Description of product 6a',
        star: 4.1,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '7_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 7,
        description: 'Description of product 7a',
        star: 4.6,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '8_thumb.jpg',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 8,
        description: 'Description of product 8a',
        star: 4.3,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '12_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 12,
        description: 'Description of product 12a',
        star: 3.9,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '19_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 19,
        description: 'Description of product 19a',
        star: 4.8,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '19b.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 19,
        description: 'Description of product 19b',
        star: 4.4,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '19c.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 19,
        description: 'Description of product 19c',
        star: 4.6,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '20_thumb.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 20,
        description: 'Description of product 20a',
        star: 4.2,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '20b.png',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 20,
        description: 'Description of product 20b',
        star: 4.7,
        stock: 50,
        time: new Date()
    },
    {
        imageUrl: productPath + '20c.jpg',
        name: "Toy's name",
        category: 'Toy',
        price: 199.999,
        id: 20,
        description: 'Description of product 20c',
        star: 4.1,
        stock: 50,
        time: new Date()
    },
];