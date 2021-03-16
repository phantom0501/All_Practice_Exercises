import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    return (
      <div className="__loading">
        {this.props.loading ? (
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: "1",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="text-danger display-2">Loading...</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const stateMapToProps = (state) => {
  return {
    loading: state.movieReducers.isLoading,
  };
};

export default connect(stateMapToProps, null)(Modal);
