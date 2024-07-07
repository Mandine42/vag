import ProductRepository from "../repository/product_repository.js";
class ProductController {
    // méthodes appelées par le router
    index = async (req, res) => {
        return res.send(await new ProductRepository().selectAll());
    };
}
export default ProductController;
