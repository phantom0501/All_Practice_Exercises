import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieList } from "../redux/action/MovieAction.jsx";

class Home extends Component {
  loadFilms = () => {
    this.props.dispatch(getMovieList());
  };
  renderFilms = () => {
    return this.props.movieStore.map((film, index) => {
      return (
        <div key={index} className="col-3 mb-4">
          <div
            className="card"
            style={{ width: "100%", height: "300px", overflow: "hidden" }}
          >
            <img
              className="card-img-top"
              src={film.hinhAnh}
              height={200}
              alt={film.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <p className="card-text">{film.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="wrapper__contents">
        <h2 className="text-left display-4 my-3">Phim mới chiếu rạp</h2>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }

  componentDidMount() {
    this.loadFilms();
  }
}

const mapStateToProps = (state) => {
  return {
    movieStore: state.movieReducers.movieStore,
  };
};

export default connect(mapStateToProps, null)(Home);
