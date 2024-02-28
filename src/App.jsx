import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [ApiData, SetApiData] = useState(null);
  const [Panier, SetPanier] = useState([]);

  function AddPanier(productId) {
    SetPanier((currentPanier) => {
      const isProductInCart = currentPanier.find((product) => product._id === productId);
      if (!isProductInCart) {
        const productToAdd = ApiData.find((product) => product._id === productId);
        return [...currentPanier, productToAdd];
      }
      return currentPanier;
    });
    console.log(Panier)
  }


  function DeletePanier(productId) {
    SetPanier((currentPanier) => {
      const productToDelete = currentPanier.find((product) => product._id === productId);
      if (productToDelete) {
        return currentPanier.filter((product) => product._id !== productId);
      }
      return currentPanier;
    });
  }
   
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://passerelle-shop-api.julienpoirier-webdev.com/products"
      );
      const data = await response.json();

      SetApiData(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {ApiData ? (
        <div className="products">
          {ApiData.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.mainImageURL} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => AddPanier(product._id)}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      ) : (
        "Loading..."
      )}

      {Panier ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {Panier.map((product) => (
              <li key={product.id}>{product.name}
              <button onClick={() => DeletePanier(product._id) }>Supprimer du Panier</button>
              <img src={product.mainImageURL} alt="" />
              <p> {product.price}$</p>
              </li>
             
            ))}
          </ul>
        </div>
      ) : (
        "Loading..."
      )}
    </div>


  );
}


export default App;