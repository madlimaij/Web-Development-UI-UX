import { getAuthorizationHeader } from "../helpers/authHelpers";
import { IAuthResponse, IAuthUser } from "../models/Auth";
import { ICartItem, ICartItemRequest } from "../models/Cart";
import { IProduct, IProductRequest } from "../models/Product";
import ApiPath from "./endPoints";
import { postRequest, deleteRequest, request } from "./utils";

const AuthApi = {
  login: (email: string, password: string) =>
    postRequest<IAuthResponse>(ApiPath.Auth.login, { email, password }),
  register: (firstName: string, lastName: string, email: string, password: string) =>
    postRequest<IAuthResponse>(ApiPath.Auth.register, { firstName, lastName, email, password }),
  currentUser: () =>
    request<IAuthUser>(ApiPath.Auth.currentUser, { headers: getAuthorizationHeader() })
};

const ProductsApi = {
  getProducts: () =>
    request<IProduct[]>(ApiPath.Products.getProducts, { headers: getAuthorizationHeader() }),
  addNewProduct: (product: IProductRequest) =>
    postRequest<IProduct>(ApiPath.Products.addNewProduct, product, {
      headers: getAuthorizationHeader()
    })
};

const CartItemApi = {
  getCartItems: () =>
    request<ICartItem[]>(ApiPath.CartItems.getCartItems, { headers: getAuthorizationHeader() }),
  saveCartItem: (cartItem: ICartItemRequest) =>
    postRequest<ICartItem>(ApiPath.CartItems.saveCartItem, cartItem, {
      headers: getAuthorizationHeader()
    }),
  removeCartItem: (cartItemId: number) =>
    deleteRequest<ICartItem>(ApiPath.CartItems.removeCartItem(cartItemId))
};

const FileUploadApi = {
  uploadFile: (formData: FormData) =>
    postRequest<{ fileName: string }>(ApiPath.FileUpload.uploadFile, formData, {
      headers: getAuthorizationHeader()
    })
};

export { AuthApi, ProductsApi, CartItemApi, FileUploadApi };
