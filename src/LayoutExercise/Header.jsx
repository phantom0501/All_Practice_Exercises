import React, { Component } from "react";
import "../assets/LayoutExercise/css/style.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    let { stateLogin } = this.props;
    let tongSoLuong = this.props.quantumNumCartIcon.reduce(
      (sum, quantumNum, index) => {
        return (sum += quantumNum.quantum);
      },
      0
    );

    return (
      <section className="header__layout bg-dark">
        <nav className="container navbar__item__main navbar navbar-expand-sm navbar-dark">
          <div className="navbar__logo__search">
            <NavLink className="navbar-brand navbar__logo" to="/">
              <img src="./img/LayoutExercise/logo.png" alt="" width={70} />
            </NavLink>

            <div className="navbar__search">
              <input
                type="text"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu bạn mong muốn ..."
              />

              <button className="navbar__search__btn">
                <img
                  className="icon-search"
                  src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                  alt=""
                />
                <span>Tìm kiếm</span>
              </button>
            </div>
          </div>

          <div className="navbar__login__cart">
            {stateLogin.isLogin === false ? (
              <div className="navbar__login">
                <img
                  className="navbar__login-img"
                  src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                  alt=""
                />
                <div className="navbar__login-connect">
                  <p>Đăng nhập / Đăng ký</p>
                  <p>Tài khoản</p>
                </div>

                <div className="navbar__login-info">
                  <button onClick={() => this.props.userLogin(stateLogin)}>
                    Đăng nhập
                  </button>
                  <button style={{ cursor: "no-drop" }}>Tạo tải khoản</button>
                  <button
                    style={{ cursor: "no-drop" }}
                    className="btn__login-social"
                  >
                    <span>Đăng nhập bằng facebook</span>
                  </button>
                  <button
                    style={{ cursor: "no-drop" }}
                    className="btn__login-social"
                  >
                    <span>Đăng nhập bằng google</span>
                  </button>
                  <button style={{ cursor: "no-drop" }}>
                    Đăng nhập bằng Zalo
                  </button>
                </div>
              </div>
            ) : (
              <div className="navbar__login navbar__login--logged">
                <img
                  className="navbar__login-img"
                  src="./img/LayoutExercise/avarta.jpg"
                  alt=""
                />
                <div className="navbar__login-connect">
                  <p>Lê Trung Cương</p>
                </div>

                <div className="navbar__login-info">
                  <ul>
                    <li>
                      <a href="###">Đơn hàng của tôi</a>
                    </li>
                    <li>
                      <a href="###">Thông báo của tôi</a>
                    </li>
                    <li>
                      <a href="###">Nhận xét đã mua sản phẩm</a>
                    </li>
                    <li>
                      <a
                        href="###"
                        onClick={() => this.props.userLogin(stateLogin)}
                      >
                        Thoát tài khoản
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div
              className="cart__item text-white d-flex align-items-end"
              data-toggle="modal"
              data-target="#modelId"
            >
              <div className="cartIcon">
                <img
                  src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                  alt=""
                  width={30}
                />

                {tongSoLuong === 0 ? (
                  <span className="cartNum">0</span>
                ) : (
                  <span className="cartNum">{tongSoLuong}</span>
                )}
              </div>
              <span className="ml-2" style={{ fontSize: "12px" }}>
                Giỏ hàng
              </span>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quantumNumCartIcon: state.layoutExerciseReducers.cartProducts,
    stateLogin: state.layoutExerciseReducers.stateLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (isLogin) => {
      dispatch({
        type: "USER_LOGIN",
        isLogin,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
