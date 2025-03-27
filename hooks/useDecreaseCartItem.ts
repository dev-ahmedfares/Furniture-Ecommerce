import actIncreaseItemQty from "@/store/cart/act/actIncreaseItemQty";
import {
  actDecreaseItemQty,
  decreaseItemLocal,
  increaseItemLocal,
} from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ICartProduct } from "@/types";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export function useDecreaseCartItem() {
  const dispatch = useAppDispatch();
  const t = useTranslations("cartPage")
  const { accessToken } = useAppSelector((state) => state.auth);
  const { loadingDecrease, items: cartItems } = useAppSelector(
    (state) => state.cart
  );

  const handleDecreaseItem = (item: ICartProduct) => {
    if (accessToken) {
      dispatch(actDecreaseItemQty(item))
        .unwrap()
        .then(() => {
          toast.success(t("productDecreased"));
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(decreaseItemLocal(item));
      toast.success(t("productDecreased"));
    }
  };

  return { handleDecreaseItem, loadingDecrease, cartItems };
}
