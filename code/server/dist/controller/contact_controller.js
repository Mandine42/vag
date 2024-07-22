import ContactRepository from "../repository/contact_repository.js";
class ContactController {
    // récuperation de les documents (table)
    index = async (req, res) => {
        const results = await new ContactRepository().findAll();
        console.log(results);
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: results,
        });
    };
    create = async (req, res) => {
        const results = await new ContactRepository().create(req.body);
        console.log(results);
        return res.status(200).json({
            status: 201,
            message: "Created",
        });
    };
}
export default ContactController;
