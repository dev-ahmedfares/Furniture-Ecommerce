import { CartItemsSkeleton, CategoriesSkeleton, CategoryAndProductsSkeleton, SingleProductSkeleton } from "./skeletons";


const skeletonType = {
  categoriesSkeleton: CategoriesSkeleton,
  categoryAndProductsSkeleton:CategoryAndProductsSkeleton,
  singleProductSkeleton:SingleProductSkeleton,
  cartItemsSkeleton:CartItemsSkeleton
};

type LoadingProps = {
  status: boolean;
  isError: boolean;
  error: string | null;
  children: React.ReactNode;
  type: keyof typeof skeletonType;
};

export default function Loading({
  status,
  isError,
  error,
  children,
  type,
}: LoadingProps) {
  const Component = skeletonType[type];

  if (status) {
    return <Component />;
  } else if (isError) {
    return <div>{typeof error !== "string" ? "An unexpected error" : error}</div>;
  } else if (!isError && !status) {
    return <>{children}</>;
  }

  return null;
}
