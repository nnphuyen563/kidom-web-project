export interface Item {
  id: number;
  name: string;
  price: number;
  category: categoryDto;
  images: imageDto[];
  description: string;
  star: number;
  brand?: string;
  stock: number;
  time: Date;
  quantity: number;
}

export interface Comment {
  id: string; // Mã duy nhất của bình luận
  username: string; // Tên người bình luận
  text: string; // Nội dung bình luận
}

export interface ShoppingCartItem extends Item {
  addedToCartQuantity: number;
}

export interface categoryDto {
  id: number;
  name: string;
  enable: boolean;
}

export interface imageDto {
  id: number;
  name: string;
  type: string;
  size: number;
  data: string;
}
