const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      userName: "hung.vu",
      fullName: "Hung Vu",
      password: "123",
      phoneNumber: "123321123",
      email: "hung.vu@gmail.com",
      type: "Client",
    },
    {
      id: 2,
      userName: "hieu.tran",
      fullName: "Hieu Tran",
      passWord: "1234",
      phoneNumber: "123321123",
      email: "hieu.tran@gmail.com",
      type: "Admin",
    },
  ],
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  // lấy thông tin trên form add vào phần thông tin
  switch (type) {
    case "ADD_USER": {
        const data = [...state.userList];
        data.push({
            ...payload, // LẤY LẠI GIÁ TRỊ CŨ
            id: Date.now() // THÊM 1 ID MỚI
        });
     
        state.userList = data;
        break;
    }

    default:
      break;
  }

  return { ...state };
};
