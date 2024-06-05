//Hàm wait tạo ra một khoảng dừng,
// Dùng cho việc kiểm thử
// Tạo khoảng dừng khi cal API
// Call API lại sau khoảng thời gian chờ

export const wait = (duration: number = 500): void => {
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
