import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <div className="background-light300_dark200 mt-auto">
      <div className="container lg:py-16 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 lg:gap-32">
          <div>
            <Link href={"/"} className="font-bold text-2xl">
              Logo
            </Link>
            <p className="font-medium mt-6 text-sm max-w-[400px]">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans">Services</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  Branding
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans">Furniture</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  Beds
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  Chair
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                  All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans">Follow Us</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <TiSocialFacebook size={20} />
                  </span>
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <IoLogoInstagram size={20} />
                  </span>
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center flex gap-4 max-sm:flex-col sm:justify-between mt-8 text-sm">
          <p className="font-dmSans text-dark-500 dark:text-light-100/50">Copyright © {new Date().getFullYear()}</p>
          <div className="flex items-center gap-8 max-xs:flex-col max-sm:gap-4">
            <Link href={"/"}>Terms & Conditions</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
