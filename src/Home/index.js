import Article from "../component/Article";
import Cards from "../component/Cards";
import { useEffect, useState } from "react";
import Loading from "../component/Loading";

function Home() {
  // state => specail variables
  // state hook is used to store api respore
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  //form api (first)
  const fetchProducts = (limit, offset) => {
    fetch(
      `https://api.escuelajs.co/api/v1/products/?offset=${offset}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setloading(false);
      });
  };

  //excute
  useEffect(() => {
    //call to api products
    fetchProducts(16, 0);
  }, []);

  return (
    <>
      <main>
        
        <Article />

        <section className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          {/* loop data from products to Cards */}
          <section className="grid grid-cols-4 md:grid-cols-4 gap-4 ">
            {loading ? (
              <Loading />
            ) : (
              products.length > 0 &&
              products.map((product) => (
                  <Cards
                  key = {product.id}
                  url={product.images[0]}
                  desc={product.description}
                  price={product.price}
                />
              ))
            )}
          </section>
        </section>
      </main>
    </>
  );
}
export default Home;
