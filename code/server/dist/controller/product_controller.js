class ProductController {
    // méthodes appelées par le router
    index = (req, res) => {
        return res.send("product controller");
    };
}
export default ProductController;
