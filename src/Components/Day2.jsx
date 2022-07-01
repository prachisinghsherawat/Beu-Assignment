import { useState } from "react";

export const Prod = () => {

  const [flag, setFlag] = useState(false);

  let productsarr = [
    {
      id: 1,
      name: "product1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "product2",
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      name: "product3",
      price: 300,
      quantity: 1,
    },
    {
      id: 4,
      name: "product4",
      price: 400,
      quantity: 1,
    },
  ];


  const [products, setProducts] = useState(productsarr);

  const increament = (val) => {

    products.map((el) => {
      if (el.id == val) {
        el.quantity++;
        setFlag(!flag);
      }
    });

    //  console.log(products)
    //   setProducts(newproducts)

  };



  const Decrement = (id) => {
    products.map((el) => {
      if (el.id == id) {
        el.quantity--;
        setFlag(!flag);
      }
    });
  };


  return (


    <>
       <div className="productsDiv">

           <h1>Product Page</h1>

       {products.map((el) => (
        <div
          key={el.id}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <p>{el.id}</p>
          <p>{el.name}</p>
          <p>{el.price}</p>
          <button onClick={() => increament(el.id)}>+</button>
          {el.quantity}
          <button disabled={el.quantity == 1} onClick={() => Decrement(el.id)}>
            -
          </button>
        </div>
      ))}
       </div>


       <div className="CartDiv">

        <h1>Cart Page</h1>

       {products.map((el) => (
            <div
                key={el.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}>

                <p>{el.name}</p>
                <p>{el.price*el.quantity}</p>


            </div>
        ))}

        </div>
    </>
  );
};




