import axios from "axios";

export const getMovieList = () => {
  return async (dispatch) => {
    dispatch({
      type: "OPEN_LOADING",
    });

    setTimeout(async () => {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });

      dispatch({
        type: "GET_MOVIE_LIST",
        movieStore: result.data,
      });

      dispatch({
        type: "CLOSE_LOADING",
      });
    }, 500);
  };
};
