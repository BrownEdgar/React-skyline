import { useParams } from "react-router-dom"
import FetchDataHook from "../../../../customHooks/FetchDataHook";
import './product.scss'
import { IoIosStar } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
export default function Product() {
    const { id } = useParams()
    const [data, error] = FetchDataHook(`http://localhost:3000/products/${id}`);
  
    if (error) {
        <pre>
            {JSON.stringify(error, null, 1)}
        </pre>
    }
    const notify = () => {
          
    }
    return (
      <section>
        {data ? (
          <>
            <img src={data.image} alt="" />
            <div className="item_info">
              <h1>{data.title}</h1>
              <span>{data.category}</span>
              <strong>{data.price}</strong>
              <button disabled className="disabled">
                Coming soon
              </button>
              <button className="buy" onClick={notify}>
                Notify Me
              </button>
              <p>{data.description}</p>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
          </>
        ) : (
          <div className="load">
            <BiLoaderAlt />
          </div>
        )}
      </section>
    );
}
