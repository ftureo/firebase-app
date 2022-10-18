import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { db } from "../firebase/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const UpdateProduct = () => {
    const [title, setTitle] = useState("");
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const getProductByID = async (id) => {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);
        console.log(productSnap);
        if (productSnap.exists()) {
            setDescription(productSnap.data().description);
            setStock(productSnap.data().stock);
            setTitle(productSnap.data().title);
        } else {
            alert("No such document!");
            navigate("/");
        }
    };

    const editProduct = async (e) => {
        e.preventDefault();
        const productRef = doc(db, "products", id);
        const newData = {
            title,
            stock,
            description,
        };
        try {
            await updateDoc(productRef, newData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductByID(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={editProduct}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit">Update Product</Button>
            </form>
        </div>
    );
};

export default UpdateProduct;
