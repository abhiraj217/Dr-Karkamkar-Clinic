import React from "react";
import "./SectionTitle.scss";
import googleReviewSvg from "../../assets/ivory/google_svg.svg";

const SectionTitle = ({
    subTitle,
    title,
    description,
    googleReviews = false,
}) => {
    return (
        <div className="section-title">
            <span className={googleReviews ? "text-color" : ""}>
                {subTitle}
            </span>
            <h2 className={googleReviews ? "text-color" : ""}>{title}</h2>
            {googleReviews && (
                <>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >
                        <img src={googleReviewSvg} alt="Google Review" />
                        <h4
                            className={googleReviews ? "text-color" : ""}
                            style={{ marginLeft: "12px" }}
                        >
                            Google Reviews
                        </h4>
                    </div>
                </>
            )}
            <p className={googleReviews ? "text-color" : ""}>{description}</p>
        </div>
    );
};

export default SectionTitle;
