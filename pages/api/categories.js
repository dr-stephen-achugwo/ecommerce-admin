// handling api's for the category page... hence editing database here, (i.e adding, updating , deleting and fetching categories etc ) 
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";

export default async function handleCategories(req, res) {
    const { method } = req;

    // database connection
    await mongooseConnect();

    // checking if admin is requesting for api's
    // await isAdminRequest(req,res);

    // api for creating new category in DB
    if (method === 'POST') {
        const { categoryName, parentCategory, properties } = req.body;

        if (!categoryName) {
            return res.status(400).json({ error: 'Category name is required' });
        }

        try {
            const CategoryDoc = await Category.create({ 
                name: categoryName,
                parent: parentCategory || undefined,
                properties
            });
            res.status(201).json(CategoryDoc);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create category', details: error.message });
        }
    }

    // api for updating existing category from DB
    if (method === 'PUT') {
        const { categoryName, parentCategory, properties, _id } = req.body;

        if (!categoryName || !_id) {
            return res.status(400).json({ error: 'Category name and ID are required' });
        }

        try {
            const CategoryDoc = await Category.updateOne(
                { _id },
                { 
                    name: categoryName,
                    parent: parentCategory || undefined,
                    properties,
                }
            );
            res.status(200).json({ success: true, data: CategoryDoc });
        } catch (error) {
            res.status(500).json({ error: 'Failed to edit category', details: error.message });
        }
    }

    // api for fetching all categories from db
    if (method === 'GET') {
        try {
            const categories = await Category.find().populate('parent');
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch categories', details: error.message });
        }
    }

    // api to delete category from db
    if (method === 'DELETE') {
        const {_id} = req.query;
            await Category.deleteOne({_id});
            res.status(200).json("ok");
        
    }
}
