import React from "react";

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;
  return (
    -0 +
    (
      <form>
        <h3>{movie.name}</h3>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 0}
        >
          -
        </button>
        {quantity}
        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity >= movie.available}
        >
          +
        </button>
      </form>
    )
  );
}

// onclikc, setquantity y quantity nos permite aunmentar o disminuir con los botones
