export class ProductAdmin {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  category!: categoryDto;
  images!: imageDto[];
  star!: number;
  brand?: string;
  stock!: number;
  time!: Date;
}

export class categoryDto {
  id!: number;
  name!: string;
  enable!: boolean;
}

export class imageDto {
  id!: number;
  name!: string;
  type!: string;
  size!: number;
  data!: string;
}
