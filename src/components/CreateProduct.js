import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const MySwal = withReactContent(Swal);

const CreateProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        stock: 0,
    });
    console.log("product", product);

    // Sin Refactorizar
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [stock, setStock] = useState(0);
    // console.log("title", title);
    // console.log("description", description);
    // console.log("stock", stock);

    const navigate = useNavigate();

    const productCollection = collection(db, "products");

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            await addDoc(productCollection, product);

            // await addDoc(productCollection, {
            //     // Notación anterior a ES6
            //     // title: title,
            //     // description: description,
            //     // stock: stock,
            //     // Con notación de ECMASCRIPT 6 podemos simplificarlo cuando el nombre de la key tiene el mismo nombre que la variable
            //     title,
            //     description,
            //     stock,
            //     // Le asigna un ID al producto automáticamente
            // });
            MySwal.fire({
                title: "Created!",
                text: "Your product has been created successfully.",
                icon: "success",
                confirmButtonText: "Ok",
            });
            navigate("/");
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "Your product has not been created.",
                icon: "error",
                confirmButtonText: "Ok",
            });
            navigate("/");
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value, e.target.name);

        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={product.title}
                    // onChange={(e) => setTitle(e.target.value)} // Plausible de refactorizar
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    // onChange={(e) => setDescription(e.target.value)}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={product.stock}
                    // onChange={(e) => setStock(e.target.value)}
                    onChange={handleChange}
                />

                <Button variant="success" type="submit">
                    Create Product
                </Button>
            </form>
        </div>
    );
};

export default CreateProduct;
