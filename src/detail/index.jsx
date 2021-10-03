import React from "react";
import { Card, H5, Chip, Fab, Divider } from "ui-neumorphism";
import "./detail.css";
import { useReducerAPI } from "../api";
import { useParams } from "react-router-dom";
import BookLoadingAnim from "../components/bookLoadingAnim";
import { Link } from "react-router-dom";

const Detail = () => {
  let { movie_id } = useParams();
  const movieDetails = useReducerAPI(
    `https://hlukyamel.pythonanywhere.com/api/movieList/${movie_id}`
  );
  if (movieDetails && movieDetails.data) {
    let results = movieDetails.data;
    let isEnglishIncluded = false;
    if(results.downloadLinkEnglish !== ""){
      isEnglishIncluded = true;
    }
    return (
      <Card inset rounded className='photo-card'>
        <div className=' blog-insert '>
          <img
            src={results.movieCover}
            alt={results.movieTitle}
            className='img-responsive center-block d-block mx-auto'
          />
        </div>
        <div className='book-details'>
          <H5>{results.movieTitle}</H5>
          <p className='tagline'>{results.rating}/10</p>
          <Link
            to={{
              pathname: `${process.env.PUBLIC_URL}/genres/${results.movieCategory.categoryName}`,
            }}>
            <Chip label className='ma-3' size='large' type='info'>
              {results.movieCategory.categoryName}
            </Chip>
          </Link>
          <Divider dense elevated />
          <p>{results.review} </p>
          <Divider dense />
          <div className=' justify-content-center'>
          <Fab 
            onClick={function () {
              window.open(`${results.downloadLinkBurmese}`);
            }}>
            &nbsp;
            <span style={{ fontSize: "30px", color: "#46484b" }}>&#11015;</span>
            &nbsp;Download (Myanmar sub) &nbsp;
          </Fab>
          <br/>
          <br/>
          {isEnglishIncluded ? (<Fab 
            onClick={function () {
              window.open(`${results.downloadLinkEnglish}`);
            }}>
            &nbsp;
            <span style={{ fontSize: "30px", color: "#46484b" }}>&#11015;</span>
            &nbsp;Download (English sub) &nbsp;
          </Fab>) : null }

      </div>
        </div>
      </Card>
    );
  }
  return <>{movieDetails.loading && <BookLoadingAnim />}</>;
};

export default Detail;
