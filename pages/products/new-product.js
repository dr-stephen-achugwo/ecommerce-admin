// /products/new-product page.... for adding new product
import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
    return(
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    )
}