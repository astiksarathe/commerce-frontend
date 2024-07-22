import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Progress, Rate } from "antd";
import React from "react";
import { green } from "@ant-design/colors";
import PropTypes from "prop-types";
import "./review.scss";
import PostReview from "./PostReview";
import { useDispatch } from "react-redux";
import { postReviewModelHandler } from "../../features/review";
const ReviewItems = () => {
  return (
    <div className="review-item">
      <div className="review-author">
        <div className="author-info">
          <div className="author-avatar">
            <Avatar icon={<UserOutlined />} size={50} />
          </div>
          <div className="author-details">
            <div className="author-stars">
              <Rate disabled value={5} style={{ fontSize: "16px" }} />
            </div>
            <p className="author-rating hide">5 out of 5 stars</p>
            <div className="author-meta">
              <strong>Emily Selman</strong> <em className="author-verified">(verified owner)</em>
              <span>-</span>
              <time dateTime="">June 21, 2024</time>
            </div>
          </div>
        </div>

        <div className="review-text">
          <p>
            This is the bag of my dreams. I took it on my last vacation and was able to fit an
            absurd amount of snacks for the many long and hungry flights.
          </p>
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
  return (
    <>
      <div className="review-component">
        <div className="review-header">
          <h2 className="review-title">Reviews (5)</h2>
          <div className="review-summary">
            <p className="review-count">Based on 1624 reviews</p>
            <div>
              <div className="review-stars">
                <strong>5.00</strong>
                <span>Overall</span>
              </div>
              <p className="review-rating hide">4 out of 5 stars</p>
            </div>
          </div>
        </div>
        <div className="review-data">
          <dl className="review-data-list">
            <ReviewDataItem rating={5} percentage={40} />
            <ReviewDataItem rating={5} percentage={40} />
            <ReviewDataItem rating={5} percentage={40} />
            <ReviewDataItem rating={5} percentage={40} />
            <ReviewDataItem rating={5} percentage={40} />
          </dl>
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
            <ReviewItems />
            <ReviewItems />
            <ReviewItems />
            <ReviewItems />
          </div>
        </div>
      </div>
      <PostReview />
    </>
  );
};

ReviewDataItem.propTypes = {
  rating: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Review;
