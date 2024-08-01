import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Pagination, Progress, Rate } from "antd";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./review.scss";
import PostReview from "./PostReview";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByProductId, postReviewModelHandler } from "../../features/review";
import { calculatePercentage, formatDate } from "../../utils/common";

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
            <p className="author-rating hide">{review.rating} out of 5 stars</p>
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
    <div className="review-data-item">
      <dt className="review-data-label">
        <div className="review-data-star">
          <Rate disabled value={rating} style={{ fontSize: "16px" }} />
        </div>
        <div aria-hidden="true" className="review-data-bar">
          <Flex vertical gap="small">
            <Progress percent={percentage} strokeLinecap="square" type="line" size={["100%", 15]} />
          </Flex>
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
      <div className="review-component">
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
                <p className="review-rating hide">{aggregateRating} out of 5 stars</p>
              </div>
            </div>
          </div>
          <div className="review-data">
            <dl className="review-data-list">{ReviewDataItems}</dl>
          </div>
          <div className="review-share">
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
        <div className="recent-reviews">
          <h3 className="recent-reviews-title">
            {metaData.total_reviews === 0 ? (
              <span>Be The First To Review </span>
            ) : (
              <span>{metaData.total_reviews} reviews</span>
            )}
            for <span> {title} </span>
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
      <PostReview productId={productId} />
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
