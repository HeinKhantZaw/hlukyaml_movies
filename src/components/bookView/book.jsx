import { Card, CardContent } from "ui-neumorphism";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import "./book.css";

const Book = ({
  id,
  movieTitle,
  movieCover,
  rating,
  review,
  downloadLinkBurmese,
  downloadLinkEnglish,
  movieCategory,
}) => (
  <div className='col d-inline-flex justify-content-center'>
    <Link
      to={{
        pathname: `${process.env.PUBLIC_URL}/detail/${id}`,
        state: [
          {
            id: id,
            movieTitle: movieTitle,
            movieCover: movieCover,
            rating: rating,
            review: review,
            downloadLinkBurmese: downloadLinkBurmese,
            downloadLinkEnglish:downloadLinkEnglish,
            movieCategory: movieCategory,
          },
        ],
      }}>
      <Card
        className='bookCard'
        width={230}
        height={380}
        style={{ marginTop: "30px", marginBottom: "30px" }}>
        <img
          className='rounded'
          src={movieCover}
          alt={movieTitle}
          style={{ height: "290px", width: "230px" }}
        />
        <CardContent>
          <TextTruncate line={1} text={movieTitle} element='h6' />
          <TextTruncate line={2} text={'Rating:'+rating+'/10'}  />
        </CardContent>
      </Card>
    </Link>
  </div>
);

export default Book;

Book.propTypes = {
  id: PropTypes.number,
  movieTitle: PropTypes.string,
  rating: PropTypes.string,
  movieCover: PropTypes.string,
  review: PropTypes.string,
  downloadLinkBurmese: PropTypes.string,
  downloadLinkBurmese: PropTypes.string,
  movieCategory: PropTypes.object,
};
