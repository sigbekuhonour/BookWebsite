"use client";

import React from "react";
import { useCart } from "./context/CartContext";
import { ShoppingCart, X, Trash2 } from "lucide-react";

// Using the phone number from the plan as placeholder
const PHONE_NUMBER = "7097304177";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  if (cart.length === 0) {
    return null;
  }

  const toggleCart = () => setIsOpen(!isOpen);

  const handleCheckout = () => {
    const itemList = cart.map((item) => `- ${item.title}`).join("\n");
    const message = `Hello, I would like to order the following books:\n${itemList}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`sms:${PHONE_NUMBER}&body=${encodedMessage}`, "_self");
  };

  console.log(cart.length);

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Open cart"
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {cart.length}
          </span>
        </div>
      </button>

      {/* Cart Drawer/Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end sm:items-start p-4 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-sm rounded-xl border bg-card text-card-foreground shadow-xl sm:mt-20">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-semibold leading-none tracking-tight">
                Your Cart
              </h3>
              <button
                onClick={toggleCart}
                className="rounded-full p-1 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              {cart.map(
                (
                  item,
                  index,
                ) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex items-center justify-between space-x-4"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.title}
                      </p>
                      {item.price && (
                        <p className="text-sm text-muted-foreground">
                          ${item.price}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ),
              )}
            </div>

            <div className="border-t p-4">
              <button
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Checkout (SMS)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
