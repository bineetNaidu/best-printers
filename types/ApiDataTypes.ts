export type ImageTypes = {
  _id: string;
  name: string;
  width: number;
  height: number;
  url: string;
};

export default interface ApiTypes {
  _id: string;
  id: string;
  price: number;
  heroImage: ImageTypes[];
  pros: string;
  cons: string;
  name: string;
  para1: string;
  img1: ImageTypes;
  para2: string;
  img2: ImageTypes;
  para3: string;
  img3: ImageTypes;
  published_at: string;
  createAt: string;
  updatedAt: string;
}
