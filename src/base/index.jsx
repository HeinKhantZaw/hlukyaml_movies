import React, { Component } from "react";
import Book from "../components/bookView/book";
import BookLoadingAnim from "../components/bookLoadingAnim";
import { Card, TextField, Dialog, Button } from "ui-neumorphism";
import ReactPaginate from "react-paginate";
import "./base.css";
import axios from "axios";

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      offset: 0,
      data: [],
      perPage: 12,
      currentPage: 0,
      link: this.props.linkFromParent,
      title: this.props.titleFromParent,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  apiCall() {
    axios.get(`${this.state.link}`).then((result) => {
      const data = result.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const movieData = slice.map((book) => (
        <Book
          id={book.id}
          movieTitle={book.movieTitle}
          rating={book.rating}
          movieCover={book.movieCover}
          review={book.review}
          downloadLinkBurmese={book.downloadLinkBurmese}
          downloadLinkEnglish={book.downloadLinkEnglish}
          movieCategory={book.movieCategory}
          key={book.id}
        />
      ));
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        movieData,
        loading: false,
      });
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    });
  }
  keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("value", e.target.value);
      this.setState(
        {
          link:
            "https://hlukyamel.pythonanywhere.com/api/movieSearch/?search=" +
            e.target.value,
          loading: true,
          title: "Search Result",
        },
        () => {
          this.apiCall();
        }
      );
    }
  };
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.apiCall();
      }
    );
  };
  componentDidMount() {
    this.apiCall();
  }
  render() {
    return (
      <>
        {this.state.loading ? <BookLoadingAnim /> : null}
        {!this.state.loading ? (
          <div className='heading'>
            <TextField
              label='Search...'
              rounded
              className='justify-content-center'
              onKeyDown={this.keyPress}
            />
            <h2 className='justify-content-center'>{this.state.title}</h2>
            <Button
              onClick={() => this.setState({ visible: true })}
              className='my-4'>
              Sort By
            </Button>
            <Dialog
              minWidth={300}
              visible={this.state.visible}
              onClose={() => this.setState({ visible: false })}>
              <Card className='p-2'>
                <div className='row m-4'>
                  <Button
                    onClick={() =>
                      this.setState(
                        {
                          visible: false,
                          link:
                            "https://hlukyamel.pythonanywhere.com/api/movieSearch/?ordering=-id",
                          loading: true,
                          title: "Movie List(Most Recent)",
                        },
                        () => {
                          this.apiCall();
                        }
                      )
                    }>
                    Time Added (Most Recent)
                  </Button>
                </div>
                <div className='row m-4'>
                  <Button
                    onClick={() =>
                      this.setState(
                        {
                          visible: false,
                          link:
                            "https://hlukyamel.pythonanywhere.com/api/movieSearch/?ordering=movieTitle",
                          loading: true,
                          title: "Movie List(A-Z)",
                        },
                        () => {
                          this.apiCall();
                        }
                      )
                    }>
                    Alphabetical order (A-Z)
                  </Button>
                </div>
              </Card>
            </Dialog>
            <div className='container justify-content-center'>
              <Card inset className='px-2'>
                <div className='row'>{this.state.movieData}</div>
                <ReactPaginate
                  previousClassName={"neu-flat"}
                  nextClassName={"neu-flat"}
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={this.handlePageClick}
                  containerClassName={
                    "pagination d-inline-flex justify-content-center align-items-center"
                  }
                  activeClassName={"neu-pressed"}
                />
              </Card>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}