// handling api's for the product page... hence editing database here, (i.e adding, updating , deleting and fetching products etc ) 
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handleProducts(req, res) {
    const {method} = req;

    // database connection
    await mongooseConnect();

    // checking if admin is requesting for api's
    // await isAdminRequest(req,res)

    // api for fetching products
    if (method === 'GET'){
        if(req.query?.p_id){
            res.json(await Product.findOne({_id:req.query.p_id}))
        }else{
            res.json(await Product.find());
        }
    }

    // api for creating products
    if (method === 'POST'){
        const {title, category, description, images, price, properties} = req.body;
        const productDoc = await Product.create({
            title, category, description, images, price, properties 
        })
        res.json(productDoc)
    }

    // api for updating products
    if (method === 'PUT'){
        const {_id, title, category, description, images, price, properties } = req.body;
        await Product.updateOne({_id}, {title, category, description, images, price, properties})
        res.json(true);
    }

    // api for deleting product
    if (method === 'DELETE'){
        if(req.query?.p_id){
            const {_id} = req.body;
            await Product.deleteOne({_id:req.query?.p_id})
            res.json(true)
        }
    }
}
  