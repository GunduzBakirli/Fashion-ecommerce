import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Basket() {
  const basketData = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({ type: "Removeitem", payload: id });
  };
  const incItem = (id) => {
    dispatch({ type: "incItem", payload: id });
  };
  const decItem = (id) => {
    let data = basketData.find((e) => e.id === id);

    if (data.quantity > 1) {
      dispatch({ type: "decItem", payload: id });
    } else {
      dispatch({ type: "Removeitem", payload: id });
    }
  };

  return (
    <>
      <div className="cartimg py-5">
        <h1 className="text-center display-4 text-dark py-3">Your Cart.</h1>
        <nav aria-label="breadcrumb" className="text-center text-dark py-2">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item py-2 ">
              <Link className="text-dark" to={"/"}>
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active mx-2 py-2"
              aria-current="page"
            >
              Your Cart
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mt-5">
        <div className="table-responsive">
          <table className="table table-light table-striped">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Remove</th>
                <th>Product image </th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {basketData.map((item, key) => (
                <tr style={{ textAlign: "center" }} key={key}>
                  <td style={{ verticalAlign: "middle" }}>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-danger"
                    >
                      x
                    </button>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <img src={item.url} alt="" style={{ width: "150px" }} />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>{item.dressName}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.price}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => decItem(item.id)}
                    >
                      -
                    </button>
                    <span className="ms-3 me-3">{item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => incItem(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    $ {item.quantity * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Basket;
