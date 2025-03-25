import actDestroyCart from "@/store/cart/act/actDestroyCart";
import {
  actRemoveItemFromCart,
  clearCartLocal,
  removeItemLocal,
} from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ICartProduct } from "@/types";
import { toast } from "sonner";

export function useRemoveItemAndDestroyCart() {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { loadingDeleteFromCart, loadingDestroyCart } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const handleDeleteItemFromCart = (item: ICartProduct) => {
    if (accessToken) {
      dispatch(actRemoveItemFromCart(item))
        .unwrap()
        .then(() => {
          toast.success("Product Removed Successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(removeItemLocal(item));
      toast.success("Product Removed Successfully");
    }
  };
  const handleDestroyCart = () => {
    if (accessToken) {
      dispatch(actDestroyCart())
        .unwrap()
        .then(() => {
          toast.success("Successfully Cart is destroyed");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(clearCartLocal());
      toast.success("Successfully Cart is destroyed");
    }
  };

  return { handleDeleteItemFromCart, handleDestroyCart, loadingDeleteFromCart, loadingDestroyCart };
}
