"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from "./../../types/Book";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "./../../context/CartContext";
import Image from "next/image";

export function BookCard({
  id,
  imageUrl,
  price,
  title,
  description,
  noOfStock,
}: Book) {
  const inStockText = noOfStock > 0 ? "In Stock" : "Out of stock";
  const { addToCart } = useCart();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Card
        className="relative group w-full max-w-sm flex-col flex h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer"
        onClick={() => description && setShowOverlay(true)}
      >
        <div className="aspect-square w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="grow p-4">
          <CardAction className="mb-2">
            <Badge
              variant={noOfStock > 0 ? "secondary" : "destructive"}
              className="mb-1"
            >
              {inStockText}
            </Badge>
          </CardAction>
          <CardTitle className="line-clamp-2 text-lg leading-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base font-semibold mt-1 text-foreground/80">{`C$${price}`}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto p-4 pt-0">
          <Button
            className="w-full font-semibold"
            disabled={noOfStock <= 0}
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ id, title, price });
            }}
          >
            {noOfStock > 0 ? "Add to Cart" : "Unavailable"}
          </Button>
        </CardFooter>
      </Card>

      {/* Description Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowOverlay(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Book image */}
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(85vh-14rem)]">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold leading-tight">{title}</h2>
                <Badge
                  variant={noOfStock > 0 ? "secondary" : "destructive"}
                  className="shrink-0"
                >
                  {inStockText}
                </Badge>
              </div>

              <p className="text-lg font-semibold text-primary">{`C$${price}`}</p>

              {description && (
                <div className="pt-2 border-t border-border/50">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    About this book
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                    {description}
                  </p>
                </div>
              )}

              <Button
                className="w-full font-semibold mt-4"
                disabled={noOfStock <= 0}
                onClick={() => {
                  addToCart({ id, title, price });
                  setShowOverlay(false);
                }}
              >
                {noOfStock > 0 ? "Add to Cart" : "Unavailable"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
