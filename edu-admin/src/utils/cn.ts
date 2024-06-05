import cx from 'classnames';
import { twMerge } from 'tailwind-merge';

//Hàm cn dùng để rút gọn class
//VD const classNames = cn('bg-red-500', { 'text-center': true, 'hidden': false }, 'bg-blue-500');
//   console.log(classNames);  // Kết quả: "bg-blue-500 text-center"

//type ArgumentArray = Array<string | number | null | undefined | { [key: string]: any } | ArgumentArray>;

//...inputs (có thể nhận vào một danh sách các tham số)
export function cn(...inputs: cx.ArgumentArray) {
  return twMerge(cx(inputs));
}
