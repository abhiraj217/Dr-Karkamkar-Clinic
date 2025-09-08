import React from "react";
import "./TestimoniCard.scss";
import { AiFillStar } from "react-icons/ai";
import Avatar from "react-avatar";
import { FaExternalLinkAlt } from "react-icons/fa";

const TestimoniCard = ({ testimonail }) => {
    const { name, text, stars, reviewUrl } = testimonail;

    return (
        <div className="col-lg-4 single-testimoni">
            <div className="testimonial-card">
                <div className="testimonial-img">
                    <Avatar name={name} round={true} />
                </div>
                <div className="testimonial-text">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <h3 className="mb-0">{name}</h3>
                        <FaExternalLinkAlt
                            style={{ cursor: "pointer" }}
                            className="ms-2"
                            onClick={() => {
                                window.open(reviewUrl, "_blank");
                            }}
                        />
                    </div>
                    <p
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            minHeight: "4.5em",
                            lineHeight: "1.5em",
                        }}
                    >
                        {text}
                    </p>
                </div>
                <ul className="testimonial-rating">
                    {Array.from({ length: stars }).map((_, index) => (
                        <li key={index}>
                            <AiFillStar />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TestimoniCard;
