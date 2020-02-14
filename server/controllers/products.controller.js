const Products = require('../models/Products');
const Categories = require('../models/Categories');

module.exports = {
    async getAllProducts(req, res)  {
        const products = await Products.findAll();
        res.send(products);
    },

    async getProductByCategoryID(req,res){
        const id = req.params.id;  
        await Categories.findAll({
          where:{
            category_id:id
          },
          include: [{
            model: Products,
            required: true,
           }]
        }).then(prod => {
          res.send(prod );
        });
    }
}

