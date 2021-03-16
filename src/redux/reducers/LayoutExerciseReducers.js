const sateDefault = {
  layoutExerciseDataPhone: [
    {
      code: 1,
      name: "BlackBerry",
      picture: "./img/LayoutExercise/sp_blackberry.png",
      price: 8000000,
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      code: 2,
      name: "Iphone X",
      picture: "./img/LayoutExercise/sp_iphoneX.png",
      price: 15000000,
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      code: 3,
      name: "SS Gala Note 7",
      picture: "./img/LayoutExercise/sp_note7.png",
      price: 35000000,
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      code: 4,
      name: "Vivo",
      picture: "./img/LayoutExercise/sp_vivo850.png",
      price: 6000000,
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "Android 8.0",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
  ],
  layoutExerciseDataLaptop: [
    {
      code: 31,
      name: "Laptop HP",
      picture: "./img/LayoutExercise/lt_hp.png",
      price: 15000000,
      manufacturer: "HP",
      species: "HP 15s-fq1107TU",
      partNumber: "193Q3PA",
      microprocessor:
        "Intel® Core ™ i3-1005G1 (base frequency 1.2 GHz, upto 3.4Ghz, cache 4 MB, 2 cores)",
      vga: "Intel® HD Graphics 620",
      card: "Reader	1 multi-format SD media card reader",
      pin: "3-cell, 41 Wh Li-ion",
      operatingSystem: "Windows 10 Home",
    },
    {
      code: 2313,
      name: "Laptop Lenovo",
      picture: "./img/LayoutExercise/lt_lenovo.png",
      price: 18000000,
      manufacturer: "Lenovo",
      species: "Lenovo Thinkpad T480S",
      partNumber: "193Q3PA",
      microprocessor:
        "Intel® Core ™ i3-1005G1 (base frequency 1.2 GHz, upto 3.4Ghz, cache 4 MB, 2 cores)",
      vga: "Intel® HD Graphics 620",
      card: "Reader	1 multi-format SD media card reader",
      pin: "3-cell, 41 Wh Li-ion",
      operatingSystem: "Windows 10 Home",
    },
    {
      code: 3321,
      name: "Macbook pro",
      picture: "./img/LayoutExercise/lt_macbook.png",
      price: 42000000,
      manufacturer: "Apple",
      species: "Macbook pro 13 inch",
      partNumber: "193Q3PA",
      microprocessor:
        "Intel® Core ™ i3-1005G1 (base frequency 1.2 GHz, upto 3.4Ghz, cache 4 MB, 2 cores)",
      vga: "Intel® HD Graphics 620",
      card: "Reader	1 multi-format SD media card reader",
      pin: "3-cell, 41 Wh Li-ion",
      operatingSystem: "macOS High Sierra",
    },
    {
      code: 4313,
      name: "Laptop ROG ASUS",
      picture: "./img/LayoutExercise/lt_rog.png",
      price: 25000000,
      manufacturer: "Asus",
      species: "Asus 15s-fq1107TU",
      partNumber: "193Q3PA",
      microprocessor:
        "Intel® Core ™ i3-1005G1 (base frequency 1.2 GHz, upto 3.4Ghz, cache 4 MB, 2 cores)",
      vga: "Intel® HD Graphics 620",
      card: "Reader	1 multi-format SD media card reader",
      pin: "3-cell, 41 Wh Li-ion",
      operatingSystem: "Windows 10 Home",
    },
  ],
  cartProducts: [],
  detailedProducts: {},
  stateLogin: { isLogin: false },
};

export const layoutExerciseReducers = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_PHONE_CART": {
      let cartProductsUpdate = [...state.cartProducts];
      let index = cartProductsUpdate.findIndex(
        (phone) => phone.code === action.phones.code
      );

      if (index !== -1) {
        cartProductsUpdate[index].quantum += 1;
      } else {
        cartProductsUpdate.push(action.phones);
      }

      state.cartProducts = cartProductsUpdate;

      return { ...state };
    }

    case "DELETE_PHONE_CART": {
      let cartProductsUpdate = [...state.cartProducts];
      let index = cartProductsUpdate.findIndex(
        (phone) => phone.code === action.code
      );

      if (index !== -1) {
        cartProductsUpdate.splice(index, 1);
      }
      state.cartProducts = cartProductsUpdate;
      return { ...state };
    }

    case "INCREASE_DECREASE": {
      let cartProductsUpdate = [...state.cartProducts];
      let index = cartProductsUpdate.findIndex(
        (phone) => phone.code === action.code
      );

      if (action.quantum) {
        cartProductsUpdate[index].quantum += 1;
      } else if (cartProductsUpdate[index].quantum > 1) {
        cartProductsUpdate[index].quantum -= 1;
      }

      state.cartProducts = cartProductsUpdate;

      return { ...state };
    }

    case "DETAILED_PRODUCTS": {
      state.detailedProducts = action.phone;
      return { ...state };
    }

    case "USER_LOGIN": {
      let stateLoginUpdate = { ...state.stateLogin };
      if (stateLoginUpdate.isLogin === false) {
        stateLoginUpdate.isLogin = true;
      } else {
        stateLoginUpdate.isLogin = false;
      }
      state.stateLogin = stateLoginUpdate;

      return { ...state };
    }

    case "ADD_LAPTOP_CART": {
      let cartProductsUpdate = [...state.cartProducts];
      let index = cartProductsUpdate.findIndex(
        (laptop) => laptop.code === action.laptops.code
      );

      if (index !== -1) {
        cartProductsUpdate[index].quantum += 1;
      } else {
        cartProductsUpdate.push(action.laptops);
      }

      state.cartProducts = cartProductsUpdate;

      return { ...state };
    }

    case "DETAILED_LAPTOP_PRODUCT": {
      state.detailedProducts = action.laptop;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
