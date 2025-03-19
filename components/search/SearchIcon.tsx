import Image from "next/image";
import React from "react";

function SearchIcon({className}:{className?:string}) {
 
  return (
    <div className={className}>
      <Image
        src={"/assets/icons/search.svg"}
        width={24}
        height={24}
        alt="search icon"
        className="dark:hidden"
      />
      <Image
        src={"/assets/icons/search-dark.svg"}
        width={24}
        height={24}
        alt="search icon"
        className="hidden dark:block"
      />
    </div>
  );
}

export default SearchIcon;
