import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Pagination, Progress, Rate } from "antd";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./review.scss";
import PostReview from "./PostReview";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByProductId, postReviewModelHandler } from "../../features/review";
import { calculatePercentage, formatDate } from "../../utils/common";
const ReviewTitle = ({ metaData, title }) => {
  return (
    <h3 className="recent-reviews-title text-center">
      {metaData.total_reviews === 0 ? (
        <>
          Be The First To Review for <span>{title}</span>
        </>
      ) : (
        <>
          {metaData.total_reviews} reviews for <span>{title}</span>
        </>
      )}
    </h3>
  );
};

const ReviewItems = ({ review }) => {
  return (
    <div className="review-item">
      <div className="review-author">
        <div className="author-info">
          <div className="author-avatar">
            <Avatar icon={<UserOutlined />} size={50} />
          </div>
          <div className="author-details">
            <div className="author-stars">
              <Rate disabled value={review.rating} style={{ fontSize: "16px" }} />
            </div>
            <p className="author-rating sr-only">{review.rating} out of 5 stars</p>
            <div className="author-meta">
              <strong>{review.fullName}</strong>
              <em className="author-verified">
                {review.isVerified ? <span> ( verified owner ) </span> : ""}
              </em>
              <span>-</span>
              <time dateTime={review.createdAt}>{formatDate(review.createdAt)}</time>
            </div>
          </div>
        </div>

        <div className="review-text">
          <p>{review.content}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewDataItem = ({ rating, percentage }) => {
  return (
    <div className="">
      <dt className="flex gap-3 leading-7">
        <div className="w-48">
          <Rate className="me-0" disabled value={rating} style={{ fontSize: "16px" }} />
        </div>
        <div aria-hidden="true" className="w-full">
          <Progress
            className="justify-self-end"
            percent={percentage}
            strokeLinecap="square"
            type="line"
            size={["100%", 15]}
          />
        </div>
      </dt>
    </div>
  );
};

const Review = ({ metaData, productId, title }) => {
  const [aggregateRating, setAggregateRating] = useState("0.00");
  const dispatch = useDispatch();
  const { reviewList } = useSelector((state) => state.review);
  const ratings = [5, 4, 3, 2, 1];

  useEffect(() => {
    if (productId) dispatch(getReviewsByProductId({ productId }));
  }, [dispatch, productId]);

  const ReviewDataItems = ratings.map((rating) => (
    <ReviewDataItem
      key={rating} // Use rating as a unique key
      rating={rating}
      percentage={calculatePercentage(
        metaData.total_reviews,
        metaData[`total_${rating}_star_reviews`]
      )}
    />
  ));
  useEffect(() => {
    if (metaData.aggregateRating !== undefined) {
      setAggregateRating(metaData.aggregateRating.toFixed(2));
    }
  }, [metaData.aggregateRating]);

  const onPageChange = (page, pageSize) => {
    if (productId)
      dispatch(getReviewsByProductId({ productId, query: { page: page, limit: pageSize } }));
  };
  return (
    <>
      <div className="md:p-4">
        <h1 className="hidden sm:block text-2xl tracking-wide my-3">Reviews :</h1>
        <div className="lg:pl-36">
          <div className="md:grid grid-cols-2 gap-5">
            <div>
              <div className="review-header">
                <h2 className="review-title">Reviews ({metaData.total_reviews})</h2>
                <div className="review-summary">
                  <p className="review-count">Based on {metaData.total_reviews} reviews</p>
                  <div>
                    <div className="review-stars">
                      <strong>{aggregateRating}</strong>
                      <span>Overall</span>
                    </div>
                    <p className="review-rating sr-only">{aggregateRating} out of 5 stars</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <dl className="review-data-list">{ReviewDataItems}</dl>
              </div>
              <div className="review-share md:hidden">
                <Button
                  size="large"
                  block
                  className="share-link"
                  onClick={() => {
                    dispatch(postReviewModelHandler(true));
                  }}
                >
                  Write a review
                </Button>
              </div>
            </div>
            <div className="w-10/12 m-auto">
              <div className="hidden md:block">
                <ReviewTitle metaData={metaData} title={title} />
              </div>
              <PostReview productId={productId} />
            </div>
          </div>
          <div className="recent-reviews">
            <h3 className="recent-reviews-title md:sr-only">
              <ReviewTitle metaData={metaData} title={title} />
            </h3>
            <div className="recent-reviews-list">
              {reviewList.map((review) => (
                <React.Fragment key={review._id}>
                  <ReviewItems review={review} />
                </React.Fragment>
              ))}
              <div className="recent-reviews-pagination">
                {reviewList.length ? (
                  <Pagination
                    defaultCurrent={1}
                    defaultPageSize={5}
                    align="center"
                    total={metaData.total_reviews}
                    onChange={onPageChange}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ReviewItems.propTypes = {
  review: PropTypes.any,
};
ReviewDataItem.propTypes = {
  rating: PropTypes.number,
  percentage: PropTypes.number,
};
Review.propTypes = {
  metaData: PropTypes.object,
  productId: PropTypes.string,
  title: PropTypes.string,
};

export default Review;
