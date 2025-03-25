import actIncreaseItemQty from "@/store/cart/act/actIncreaseItemQty";
import {
  actDecreaseItemQty,
  decreaseItemLocal,
  increaseItemLocal,
} from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ICartProduct } from "@/types";
import { toast } from "sonner";

export function useDecreaseCartItem() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  const { loadingDecrease, items: cartItems } = useAppSelector(
    (state) => state.cart
  );

  const handleDecreaseItem = (item: ICartProduct) => {
    if (accessToken) {
      dispatch(actDecreaseItemQty(item))
        .unwrap()
        .then(() => {
          toast.success("Product Decreased Successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(decreaseItemLocal(item));
      toast.success("Product Decreased Successfully");
    }
  };

  return { handleDecreaseItem, loadingDecrease, cartItems };
}
