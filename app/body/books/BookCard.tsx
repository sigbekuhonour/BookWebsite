"use client";

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

export function BookCard({ id, imageUrl, price, title, noOfStock }: Book) {
  const inStockText = noOfStock > 0 ? "In Stock" : "Out of stock";
  const { addToCart } = useCart();

  return (
    <Card className="relative group w-full max-w-sm flex-col flex h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          onClick={() => addToCart({ id, title, price })}
        >
          {noOfStock > 0 ? "Add to Cart" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
}
