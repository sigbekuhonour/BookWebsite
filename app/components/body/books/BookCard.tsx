import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from "./../../../types/Book";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BookCard({imageUrl, price, title, noOfStock }: Book) {
  const inStockText = noOfStock > 0 ? "In Stock" : "Out of stock";
  return (
    <Card className="relative mx-auto shrink-0 w-64 snap-start max-w-sm flex flex-col h-full">
      <img
        src={imageUrl}
        alt="Event cover"
        className="aspect-square w-full object-cover"
      />
      <CardHeader className="grow">
        <CardAction>
          <Badge variant="secondary">{inStockText}</Badge>
        </CardAction>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{`C$${price}`}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
