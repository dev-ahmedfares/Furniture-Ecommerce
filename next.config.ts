import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["test-ecomerce.xn--hrt-w-ova.de"],
  },
};

export default withNextIntl(nextConfig);
