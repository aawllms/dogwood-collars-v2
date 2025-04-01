import React, { useState, useEffect } from "react";
import "../css/SADashboard.css"; // Create a SADashboard.css file for styling

function SADashboard() {
  const [isAdmin, setIsAdmin] = useState(false); // Check if the user is an admin
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 1. Check if the user is an admin (e.g., by checking their role in local storage or from an API call)
    const userRole = localStorage.getItem("role"); // Example
    if (userRole === "admin") {
      setIsAdmin(true);
    }

    // 2. Fetch users and products from your API
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    // Replace with your actual API endpoint
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  const fetchProducts = async () => {
    // Replace with your actual API endpoint
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  // --- User Management Functions ---
  //   const handleAddUser = async (newUser) => {
  //     // API call to add a new user
  //     // After successful addition, refresh the user list
  //     fetchUsers();
  //   };

  //   const handleRemoveUser = async (userId) => {
  //     // API call to remove a user
  //     // After successful removal, refresh the user list
  //     fetchUsers();
  //   };

  //   const handleUpdateUserPermissions = async (userId, newPermissions) => {
  //     // API call to update user permissions
  //     // After successful update, refresh the user list
  //     fetchUsers();
  //   };

  //   // --- Product Management Functions ---
  //   const handleAddProduct = async (newProduct) => {
  //     // API call to add a new product
  //     // After successful addition, refresh the product list
  //     fetchProducts();
  //   };

  //   const handleRemoveProduct = async (productId) => {
  //     // API call to remove a product
  //     // After successful removal, refresh the product list
  //     fetchProducts();
  //   };

  //   const handleUpdateProduct = async (productId, updatedProduct) => {
  //     // API call to update a product
  //     // After successful update, refresh the product list
  //     fetchProducts();
  //   };

  if (!isAdmin) {
    return <p>You do not have permission to access this page.</p>;
  }

  return (
    <div className="sa-dashboard-container">
      <h1>Super Admin Dashboard</h1>

      <section className="user-management">
        <h2>User Management</h2>
        {/* Display user list, add/remove/update buttons */}
      </section>

      <section className="product-management">
        <h2>Product Management</h2>
        {/* Display product list, add/remove/update buttons */}
      </section>
    </div>
  );
}

export default SADashboard;
