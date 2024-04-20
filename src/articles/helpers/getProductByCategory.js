import { products } from "../../db/products"




export const getProductByCategory = (category) => {

    const categorys = ['bebidas', 'snacks']

    if(!categorys.includes(category)){
        throw new Error(`${category} No hay un producto para esta categoria`)
    }

    return  products.filter( product => product.category === category);
}