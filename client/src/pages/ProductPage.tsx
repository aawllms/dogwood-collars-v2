import { useState, useEffect } from "react";

const itemPrices = {
  XS: 24,
  S: 28,
  M: 38,
  L: 48,
};


const mockProducts = [
  {
    id: "1",
    name: "Collar 1",
    image: "https://via.placeholder.com/150", 
  },
  {
    id: "2",
    name: "Collar 2",
    image: "https://via.placeholder.com/150", 
  },
];

interface Collar {
  id: string;
  name: string;
  image: string;
}

interface CardComponentProps {
  collar: Collar;
  onAddToCart: (productName: string) => void;
}

function CardComponent({ collar, onAddToCart }: CardComponentProps) {
  const [selectedSize, setSelectedSize] = useState<keyof typeof itemPrices | "">("");

  const handleSizeChange = (event: any) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log(`Added ${collar.name} in size ${selectedSize} to cart`);
      let price = itemPrices[selectedSize as keyof typeof itemPrices];
      const item = {
        id: collar.id,
        name: collar.name,
        size: selectedSize,
        price: price,
        image: collar.image,
      };

      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      onAddToCart(collar.name);

      setSelectedSize("");
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img
        src={collar.image}
        className="card-img-top"
        alt={collar.name} // Added alt attribute
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h3>{collar.name}</h3>
        <p className="card-text">$24-$48</p>
        <select
          value={selectedSize}
          onChange={handleSizeChange}
          className="size-selector"
        >
          <option value="">Select size</option>
          <option value="XS">X-Small $24</option>
          <option value="S">Small $28</option>
          <option value="M">Medium $38</option>
          <option value="L">Large $48</option>
        </select>
        <br />
        <button className="btn btn-info" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

function ProductPage() {
  const [products, setProducts] = useState<Collar[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

const handleAddToCart = (productName: string): void => {
    alert(`${productName} added to cart!`);
};

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            collar={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;