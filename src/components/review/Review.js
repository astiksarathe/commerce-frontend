import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Progress, Rate } from "antd";
import React, { useEffect } from "react";
import { green } from "@ant-design/colors";
import PropTypes from "prop-types";
import "./review.scss";
import PostReview from "./PostReview";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByProductId, postReviewModelHandler } from "../../features/review";
import { calculatePercentage, formatDate1 } from "../../utils/common";

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
              <time dateTime={review.createdAt}>{formatDate1(review.createdAt)}</time>
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
          <Progress
            percent={percentage}
            percentPosition={{ align: "center", type: "inner" }}
            size={["100%", 15]}
            strokeLinecap="square"
            strokeColor={green[6]}
          />
        </div>
      </dt>
      <dd className="review-data-percentage">{percentage}% </dd>
    </div>
  );
};

const Review = () => {
  const dispatch = useDispatch();
  const { reviewList, metaData } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(getReviewsByProductId("667580fb5bcae87af0f8da36"));
  }, [dispatch]);

  const ratings = [5, 4, 3, 2, 1];

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

  const getAggregateRating = () => {
    return (
      (5 * metaData.total_5_star_reviews +
        4 * metaData.total_4_star_reviews +
        3 * metaData.total_3_star_reviews +
        2 * metaData.total_2_star_reviews +
        1 * metaData.total_1_star_reviews) /
      metaData.total_reviews
    ).toFixed(2);
  };

  return (
    <>
      <div className="review-component">
        <div className="review-header">
          <h2 className="review-title">Reviews ({metaData.total_reviews})</h2>
          <div className="review-summary">
            <p className="review-count">Based on {metaData.total_reviews} reviews</p>
            <div>
              <div className="review-stars">
                <strong>{getAggregateRating()}</strong>
                <span>Overall</span>
              </div>
              <p className="review-rating hide">{getAggregateRating()} out of 5 stars</p>
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
        <div className="recent-reviews">
          <h3 className="recent-reviews-title">
            5 reviews for{" "}
            <span> Breathing Otter Baby Soothing Sound and Light Plush Doll Toy </span>
          </h3>
          <div className="recent-reviews-list">
            {reviewList.map((review) => (
              <React.Fragment key={review._id}>
                <ReviewItems review={review} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <PostReview />
    </>
  );
};
ReviewItems.propTypes = {
  review: PropTypes.array,
};
ReviewDataItem.propTypes = {
  rating: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Review;
