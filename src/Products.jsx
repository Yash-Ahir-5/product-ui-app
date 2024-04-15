import React, { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products"); // Assuming the API endpoint is at "/api/products"
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Product List</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Discounted Price</th>
              <th>Category</th>
              <th>SKU</th>
              <th>Variant ID</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>{product.productname}</td>
                <td>{product.description}</td>
                <td>{product.discountedPrice}</td>
                <td>{product.category_name}</td>
                <td>{product.sku}</td>
                <td>{product.variantid}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ProductList;