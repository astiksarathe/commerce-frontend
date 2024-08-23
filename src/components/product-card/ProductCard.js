import { Rate } from "antd";
import { Link } from "react-router-dom";
import {
  checkAvailability,
  formatCurrency,
  isCreatedInLast7Days,
  renderReviewText,
} from "../../utils/common";

const ProductCard = ({ product }) => {
  const { MRP, sellingPrice } = product.price;
  const {
    createAt,
    SKU,
    title,
    url,
    aggregateRating,
    totalReviews,
    preOrderBookingAvailable,
    available,
  } = product;

  const calculateDiscountAmount = (mrp, sellingPrice) => {
    const discount = mrp - sellingPrice;
    if (discount <= 0 || mrp <= 0 || sellingPrice < 0) return null;
    return (
      <span className="block rounded-tr-md rounded-br-md px-2 py-1 max-w-fit text-sm font-medium text-white bg-rose-600">
        Save {formatCurrency(discount)}
      </span>
    );
  };

  const StockStatus = ({ preOrderBookingAvailable, available }) => {
    const isAvailable = checkAvailability(preOrderBookingAvailable, available);
    return (
      <span
        className={`flex items-center gap-2 mt-2 font-medium text-xs tracking-wider ${
          isAvailable ? "text-green-700" : "text-zinc-500"
        }`}
      >
        <span
          className={`size-2 rounded-full ${
            isAvailable ? "bg-green-700 opacity-75" : "bg-zinc-500 opacity-75"
          }`}
        ></span>
        <span>{isAvailable ? "In stock" : "Sold out"}</span>
      </span>
    );
  };

  const NewProductBadge = ({ date }) =>
    isCreatedInLast7Days(date) ? (
      <span className="block rounded-tr-md rounded-br-md px-2 py-1 max-w-fit text-sm font-medium text-white bg-green-600">
        New
      </span>
    ) : null;

  return (
    <div className="flex flex-col w-1/2 sm:w-1/3 xl:w-1/4 bg-white p-5 border-r border-b relative">
      <div className="absolute top-3 left-1 z-10 lg:left-0 space-y-1">
        <NewProductBadge date={createAt} />
        {calculateDiscountAmount(MRP, sellingPrice)}
      </div>
      <Link to={`/products/${url}`} className="block mb-5">
        <div className="relative aspect-square">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt={title}
            className="absolute top-0 left-0 h-full w-full object-cover object-center group-hover:opacity-75"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between flex-shrink-0 flex-grow min-w-0">
        <div>
          <Link
            className="block text-xs text-zinc-500 hover:text-zinc-900 mb-2 uppercase transition-colors duration-200 ease-in-out break-all"
            to={`/shop/${url}`}
          >
            {SKU}
          </Link>
          <Link
            to={`/shop/${url}`}
            className="block text-sm text-zinc-600 hover:text-zinc-900 mb-3 tracking-wider transition-colors duration-200 ease-in-out"
          >
            {title}
          </Link>
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-lg text-cyan-500 sm:text-xl">
              <span className="sr-only">Sale price</span>
              {formatCurrency(sellingPrice)}
            </span>
            <span className="text-xs text-zinc-600 sm:text-sm line-through">
              <span className="sr-only">Regular price</span>
              {formatCurrency(MRP)}
            </span>
          </div>
          <div className="block mt-2">
            <div className="flex items-center">
              <Rate
                value={aggregateRating}
                className="rating-custom text-sm"
                disabled
                role="img"
                aria-label={`${aggregateRating} out of 5.0 stars`}
              />
              <span className="ml-2 text-xs text-zinc-600">
                {renderReviewText(totalReviews)}
              </span>
            </div>
          </div>
          <StockStatus
            preOrderBookingAvailable={preOrderBookingAvailable}
            available={available}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
