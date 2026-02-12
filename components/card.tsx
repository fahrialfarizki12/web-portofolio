import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";
import type { ICardText } from "@/interface/text.interface";
export default function CardHero({
  title,
  badge,
  top,
  footer,
  description,
}: ICardText) {
  return (
    <>
      <Card className="border-accent/50 rounded flex flex-col h-full w-full">
        <CardHeader className="mb-0">
          <CardTitle>
            <Badge className="text-3xl p-1 px-3 font-semibold text-white">
              {badge}
            </Badge>
          </CardTitle>
          <CardAction>
            <Badge className="font-semibold text-white">{top}</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex-1">
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <p className="text-xs sm:text-sm">{description}</p>
        </CardContent>
        <CardFooter className="text-foreground/80 mb-auto inline-flex gap-3">
          <Calendar size={18} />
          <p className="text-sm">{footer}</p>
        </CardFooter>
      </Card>
    </>
  );
}
