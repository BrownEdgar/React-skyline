import { Link } from "react-router-dom";
import useFetchData from "../../../Hooks/CustomHook/useFetchData";
import "./Products.scss";

import ROUTES from "../../routes";
export default function Products() {
  const [data, error] = useFetchData("http://localhost:3333/products");

  return (
    <div>
      <h1> Our Products </h1>
      <div className="products">
        {data ? (
          data.map((product) => {
            return (
              <Link
                className="products__item"
                key={product.id}
                to={"/" + ROUTES.PRODUCT.replace(":id", product.id)}
              >
                <img src={product.image} />
                <h2>{product.title}</h2>
              </Link>
            );
          })
        ) : (
          <h2>No products...</h2>
        )}
      </div>
    </div>
  );
}
