import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar() {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-end items-center w-full pl-2 pr-6 gap-2 col-span-3"
      >
        <Buttons variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-end items-center w-full col-span-2">
        <div class="flex-none w-[11vw] flex items-center justify-end gap-2 font-thin">
          <a
            class=" w-[5vw]"
            href="/account/#/orders"
            aria-label="Meus Pedidos"
          >
            Meus Pedidos
          </a>
          <a
            class=""
            href="/login"
            aria-label="Log in"
          >
            Entrar
          </a>
          <Buttons variant="cart" />
          <a
            class=""
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={20}
              strokeWidth={2}
              fill="none"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
