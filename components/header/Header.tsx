import type { Image } from "deco-sites/std/components/types.ts";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";

import Searchbar from "$store/components/search/Searchbar.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: INavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;
}

function Header({
  alerts,
  searchbar: _searchbar,
  products,
  navItems = [],
  suggestions,
}: Props) {
  const searchbar = { ..._searchbar, products, suggestions };

  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-[rgb(0,0,0)] fixed w-full z-50 tw-">
          <div>
            <div class="grid bg-pana-blue w-full">
              <div
                id="information-menu"
                class="grid bg-pana-blue text-white gap-[2px] justify-center items-center	grid-cols-[repeat(auto-fit,minmax(0,16%))] h-[3rem] max-w-[1450px] translate-x-[-50%] left-[50%] relative"
              >
                <p class=" flex justify-self-start col-span-3 relative text-white font-thin items-center  before:w-[2rem] before:h-[2rem] before:bg-contain before:filter before:invert-[100] before:sepia-[0] before:saturate-[7500] before:hue-rotate-[110deg] before:brightness-[98] before:contrast-[108]  before:bg-[url(https://panasonic.vtexassets.com/assets/vtex/assets-builder/panasonic.store/17.0.14/icons/icon-recycling___106dbfc7ea17df79945613947cda01fc.svg)] before:bg-no-repeat before:pr-[2vw]">
                  Descarte de eletrodoméstico consciente
                  <a
                    href={"https://abree.org.br/pontos-de-recebimento"}
                  >
                    &nbsp;<b class="underline">clicando aqui</b>
                  </a>
                </p>

                <Alert alerts={alerts} />
                <Navbar />
              </div>
            </div>

            <div class="grid justify-center items-center	grid-cols-[146px_auto_minmax(auto,100%)] p-[0_1.5vw] h-[4rem] max-w-[1450px] translate-x-[-50%] left-[50%] relative">
              <div class="flex-none w-44">
                <a
                  href="/"
                  aria-label="Store logo"
                  class="block  py-3"
                >
                  <img src="https://panasonic.vtexassets.com/assets/vtex/assets-builder/panasonic.store/19.0.2/panasonic-logo___c2594fe535ce88556655b31685d05e78.png" />
                </a>
              </div>

              <div class="flex-auto flex text-white">
                {navItems.map((item) => <NavItem item={item} />)}
              </div>

              <input
                class="bg-gray-700 h-[2rem] w-full justify-self-end "
                placeholder={" Faça sua pesquisa aqui!"}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
