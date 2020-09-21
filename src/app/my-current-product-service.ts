import { Product, ProductScope } from '@spartacus/core';
import { Observable, of } from 'rxjs';

const PRODUCT: Product = {
    code: '300938',
    name: 'Jerry hard code value',
    summary: 'Jerry hard code value.',
    price: {
        formattedValue: '$10000',
        currencyIso: 'USD',
        // "priceType": "BUY",
        value: 10000
    },
    images: {
        PRIMARY: {
            zoom: {
                altText: 'Photosmart E317 Digital Camera',
                format: 'zoom',
                // : "PRIMARY",
                url: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wxMzkzNnxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDdhLzg3OTcyNTE0NjkzNDIuanBnfGU3N2FlYWQ1YmQ1ODhjZjZiNTFjNDg3NDdjNGRkNjM5NGQzMjZmZWVmNjc3ZWQwMjgzY2MyNDJlNzYyNTczM2Q'
            },
            product: {
                altText: 'Photosmart E317 Digital Camera',
                format: 'product',
                // "imageType": "PRIMARY",
                url: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002/medias/?context=bWFzdGVyfGltYWdlc3w3MDg1fGltYWdlL2pwZWd8aW1hZ2VzL2g2Ni9oOWQvODc5NzI3Nzc0OTI3OC5qcGd8NzdjOTNiMThkODQ4NTM4NmQ2NjMxMGMwYmMyOTIwODIwMzI4NTgyMGUxNDc4Y2I0OTRkOGViODNlNDZiYTJhNw'
            },
            thumbnail: {
                altText: 'Photosmart E317 Digital Camera',
                format: 'thumbnail',
                // "imageType": "PRIMARY",
                url: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMDYxfGltYWdlL2pwZWd8aW1hZ2VzL2g3ZS9oZmEvODc5NzMwNDA5NDc1MC5qcGd8OGZjMTNjM2JmMGY0MmYyMWY3OGM5YjQ4YjAyNzM4NjkxYjUyMmQzMDBhMmMzMjMwZThmMjI4OWMwZjg1NmYzMw'
            },
            cartIcon: {
                altText: 'Photosmart E317 Digital Camera',
                format: 'cartIcon',
                // "imageType": "PRIMARY",
                url: 'https://spartacus-dev0.eastus.cloudapp.azure.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wxNDQwfGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oZmYvODc5NzMzMDQ0MDIyMi5qcGd8ODU0ZWQwMjY5OWE5OTBlZjc0ZGFhZTU4ZWYwNDk4ODFmZmM1ZTg2ZjIxOWFiZTBkZmU0NDBmMDBiNTYyMzdlYg'
            }
        },
        GALLERY: []
    },
    nameHtml: 'Photosmart E317 Digital Camera',
    //nameForUrl: 'photosmart-e317-digital-camera',
    baseOptions: [],
    purchasable: true,
    averageRating: 4.5,
    stock: {
        /*
        'isValueRounded': false,
        'stockLevel': 314,
        'stockLevelStatus': 'inStock'*/
    },
    description: 'Get point and shoot simplicity plus crisp, true-to-life photos with this stylish and easy-to-use camera.<br/><br/>Get close in with 4x digital zoom, review via the clear 3.8 cm LCD then print great 10 × 15 cm photos and enlargements up to poster size.',
    availableForPickup: true,
    url: '/electronics-spa/products/300938',
    numberOfReviews: 22,
    manufacturer: 'HP',
    categories: [
        {
            code: '576',
            name: 'Digital Compacts',
            url: '/Open-Catalogue/Cameras/Digital-Cameras/Digital-Compacts/c/576'
        },
        {
            code: 'brand_1',
            name: 'HP',
            url: '/Brands/HP/c/brand_1'
        }
    ],
    priceRange: {}//,
    //configurable: false
};

export class MyCurrentProductService {
    getProduct(scopes?: (ProductScope | string)[] | ProductScope | string): Observable<Product> {
        console.log('My product service is called!');
        return of(PRODUCT);
    }
}
