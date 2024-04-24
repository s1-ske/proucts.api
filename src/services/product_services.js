const { respo } = require("../utils/util");
const Product = require("../model/product-model");

exports.productValidate = (data, res) => {
  const { name, description, price } = data.body;
  const createdBy = data.createdBy._id;
  if (!name || !description || !price) {
    return respo(res, 400, "please fill all the details", {});
  }
  return { createdBy, name, description, price };
};

exports.createProduct = async (data, res) => {
  if (!data) {
    return respo(res, 404, "data is missing", {});
  }
  const product = await Product.create(data);
  respo(res, 201, "User Created Sucesssfully", product);
};

// exports.getValidationBYUser = async (data,res) =>{
//     const {id} = req.user._id;
//     if(!id){
//         return respo(res,400,"Id was not found",{});
//     }
//     return { id }  
// }

exports.getAllProductsUser = async (data,res) =>{
      const product = await Product.find({createdBy :data});
      respo(res, 201, "User Created Sucesssfully", product);
    };

