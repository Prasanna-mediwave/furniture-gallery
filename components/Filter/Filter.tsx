import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

interface FilterProps {
  onClose: any;
  open: any;
}
const CATEGORIES = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const PRODUCTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    category: "men's clothing",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    category: "men's clothing",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "jewelery",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    category: "jewelery",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    category: "jewelery",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    category: "jewelery",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    category: "electronics",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    category: "electronics",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    category: "electronics",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    category: "electronics",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    category: "electronics",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    category: "women's clothing",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    category: "women's clothing",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    category: "women's clothing",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    category: "women's clothing",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    category: "women's clothing",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    category: "women's clothing",
  },
];

function ProductFilters(props: any) {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <div className="grid md:grid-cols-2 gap-y-8 font-primaryFont">
        {categories.map((category: any, index: any) => (
          <div className="custom-checkbox text-xl font-medium" key={category}>
            <input type="checkbox" id={index} />
            <label htmlFor={index} aria-label={category} />
            <div className=" mt-1 ml-6"> {category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Product(props: any) {
  const { product } = props;

  return (
    <li key={product.id} className="product">
      <div className="product-details">
        <header>{product.title}</header>
        <div className="category">{product.category}</div>
      </div>
    </li>
  );
}

function ProductsList(props: any) {
  const { products } = props;

  return (
    <ul className="products">
      {products.map((product: any) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </ul>
  );
}

export const Filter: React.FC<FilterProps> = ({ onClose, open }) => {
  const closeModal = () => {
    onClose(false);
  };
  const [state, setState] = useState({
    products: PRODUCTS,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event: any) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = PRODUCTS;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );
  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            // onClick={closeModal}
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: "100vh",
            }}
          >
            <motion.div
              className="gallery-popup p-0"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
            >
              <div className="filter-header">
                <h2>Filter and find your perfect furniture</h2>
                <button onClick={closeModal}>+</button>
              </div>
              <div className=" py-8 px-8">
                <div className="flex justify-between items-baseline">
                  <div className=" font-primaryFont text-xl font-medium">
                    Avaiable tags
                  </div>
                  <div className="add-btn !mb-8 !mt-0 cursor-pointer ">
                    Clear filter
                  </div>
                </div>
                <div>
                  <div></div>
                  <div className="mb-8 font-primaryFont text-xl font-medium">
                    Select all
                  </div>
                </div>
                <div>
                  <ProductFilters
                    categories={CATEGORIES}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
