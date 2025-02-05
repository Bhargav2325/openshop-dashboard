import React from "react";
import { Link } from "react-router-dom";

const PopularProductsData = [
  {
    id: "3432",
    product_name: "Macbook MI Pro 14",
    product_thumbnail:
      "https://i.gadgets360cdn.com/large/macbook_pro_14_main_ndtv_1640953241324.jpg",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail:
      "https://dev.mos.cms.futurecdn.net/FEWCrxoq3Re3ednxnai334.jpg",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail:
      "https://www.asus.com/media/global/gallery/rgqhr5btyctwosah_setting_000_1_90_end_1000.png",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail:
      "https://upglobalnews.com/wp-content/uploads/2023/02/LG-OLED-Flex.jpg",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail: "https://i.ytimg.com/vi/0hXayzj-wUY/maxresdefault.jpg",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail:
      "https://th.bing.com/th/id/OIP.ehfr1c9XHezEgbOoumdUsQAAAA?rs=1&pid=ImgDetMain",
    product_price: "$399.00",
    product_stock: 453,
  },
];

const PopularProducts = () => {
  return (
    <div className="bg-white px-4 pt-3 mb-14 pb-4 rounded-sm border border-gray-200 w-[20rem]">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {PopularProductsData.map((product) => (
          <Link
          key={product.id}
            to={`/product/${product.id}`}
            className="flex hover:no-underline"
          >
            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={`text-sm font-medium ${product.product_stock === 0 ? "text-orange-500" : "text-green-500"}`}
              >
                {product.product_stock === 0
                  ? "Out of stock"
                  : product.product_stock + " in stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-2">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
