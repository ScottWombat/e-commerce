class Product {
    id: number;
    title: string;
    description: string;
    catalog: string;
    category: string;
    price:number;
    discount:number;
    viewers: number;
    image_id: string;
    num_image: number;
    constructor(id: number,title: string,description: string, catalog: string,
                category: string,price: number,discount:number,viewers:number,image_id:string,num_image:number) {
      this.title = title;
      this.id = id;
      this.description = description;
      this.catalog = catalog;
      this.category = category;
      this.price = price;
      this.discount = discount;
      this.viewers = viewers;
      this.image_id = image_id;
      this.num_image = num_image;
    }
}
class ProductService {
    getProducts(catalog: string,category:string) : Promise<Product[]>{
        return fetch(`http://localhost:3030/api/products/${catalog}/${category}`)
        .then(res => res.json())
    } 
    
}

export default ProductService;