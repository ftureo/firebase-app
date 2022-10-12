import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Button } from "react-bootstrap";

const MySwal = withReactContent(Swal);

const Products = () => {
    const [products, setProducts] = useState([]);

    // console.log("db", db);
    // Llamamos a la colección de productos pasando como parámetro la referencia a la base de datos y la colección que queremos recuperar
    const productsCollection = collection(db, "products");
    // console.log("productsCollection", productsCollection);

    const getProducts = async () => {
        const dataProducts = await getDocs(productsCollection);
        // console.log("dataProducts", dataProducts);
        // console.log("dataProducts.docs", dataProducts.docs);
        setProducts(
            dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    };

    console.log("products", products);

    const deleteProduct = async (id) => {
        const productToDelete = doc(db, "products", id);
        try {
            await deleteDoc(productToDelete);
            MySwal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "Your product has not been deleted.",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <Link to="/create">
                <Button>Create Product</Button>
            </Link>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.id}</p>
                        <Button onClick={() => deleteProduct(product.id)}>
                            Delete product
                        </Button>
                        <Link to="/update">
                            <Button>Update Product</Button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Products;
