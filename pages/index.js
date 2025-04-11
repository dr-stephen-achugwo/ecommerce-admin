/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-green-900 flex justify-between">
        <h2>Hello, <b>{session?.user?.name}</b></h2>

        <div className="flex justify-center items-center bg-green-300 text-green-900 font-bold rounded-full overflow-hidden pr-3 border border-green-300 shadow-green-500 shadow">
          <img src={session?.user?.image} alt="User Image" className="w-10 h-10 rounded-full"/>
          <span className="py-1 px-2 text-center">
            {session?.user?.name}
          </span>
        </div>
      </div>

      <div className="text-center mt-10 px-14">
        <h1 className="text-3xl font-semibold text-green-900 mb-4">Welcome To EcoCart</h1>
        <h3 className="text-lg text-green-900 mb-6">Join the green shopping revolution with EcoCart, where sustainability, innovation, and convenience come together to offer a shopping experience that not only meets your needs but also helps preserve the planet for future generations.</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add New Product Card */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-2xl font-bold text-green-900 mb-4">Add New Product</h4>
            <p className="text-green-700 mb-4">Add a new product to your EcoCart store and showcase sustainable options to customers.</p>
            <Link href="/products/new-product" className="text-white bg-green-700 py-2 px-4 rounded-full inline-block hover:bg-green-800 transition duration-300">
              Add Product
            </Link>
          </div>

          {/* Add New Category Card */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-2xl font-bold text-green-900 mb-4">Add New Category</h4>
            <p className="text-green-700 mb-4">Organize your products efficiently by adding new categories to EcoCart.</p>
            <Link href="/categories" className="text-white bg-green-700 py-2 px-4 rounded-full inline-block hover:bg-green-800 transition duration-300">
              Add Category
            </Link>
          </div>

          {/* View Orders Card */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-2xl font-bold text-green-900 mb-4">View Orders</h4>
            <p className="text-green-700 mb-4">Check your customer orders and manage your sales effectively.</p>
            <Link href="/orders" className="text-white bg-green-700 py-2 px-4 rounded-full inline-block hover:bg-green-800 transition duration-300">
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
