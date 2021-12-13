import React from "react";
import { useParams, useLocation } from "react-router-dom";


export default function CartScreen() {
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  return (
    <div>
      <h1>Card Screen</h1>
      <p>
        Add to cart : productID: {productId} QTY: {qty}
      </p>
    </div>
  );
}
