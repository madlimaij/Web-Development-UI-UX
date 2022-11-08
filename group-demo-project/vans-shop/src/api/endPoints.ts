export const BACKEND_BASE_PATH = "http://localhost:8000";

const ApiPath = {
  Auth: {
    login: "/auth/login",
    register: "/auth/register",
    currentUser: "/auth/current-user"
  },
  Products: {
    getProducts: "/products",
    addNewProduct: "/products"
  },
  FileUpload: {
    uploadFile: "/upload-file"
  },
  CartItems: {
    getCartItems: "/cart-items",
    saveCartItem: "/cart-items",
    removeCartItem: (cartItemId: number) => `/cart-items/${cartItemId}`
  }
};

export default ApiPath;
