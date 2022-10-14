import Products from "./components/Products";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Link to="/">
                <h1>Running Firebase App</h1>
            </Link>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/create" element={<CreateProduct />} />
                <Route path="/update/" element={<UpdateProduct />} />
            </Routes>
        </div>
    );
};

export default App;
