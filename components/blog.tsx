import { Badge } from "@/components/ui/badge";
import { BsArrowDownRightSquare } from "react-icons/bs";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { IBlog } from "@/interface/blog.interface";
const Blog = ({
  imageUrl,
  imageAlt,
  BadgeBlog,
  TitleCard,
  DescriptionCard,
  Visit,
  ImageProfile,
  ImageProfileAlt,
  Author,
  VisitUrl,
  DateBlog,
}: IBlog) => {
  return (
    <Card className="gap-3 py-0 shadow-none border-accent/50">
      <CardHeader className="p-2 pb-0">
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="px-5 pt-0 pb-5">
        <div className="flex flex-wrap gap-2 mb-5">
          {BadgeBlog.map((items, index) => (
            <Badge key={index} className="bg-primary">
              {items}
            </Badge>
          ))}
        </div>

        <h3 className="mt-4 font-semibold text-2xl text-[1.4rem] tracking-[-0.015em]">
          {TitleCard}
        </h3>
        <p className="text-sm my-2 mb-4">{DescriptionCard}</p>
        {Visit === false ? null : (
          <Link
            href={VisitUrl === undefined ? "#" : VisitUrl}
            className="text-sm underline inline-flex items-center gap-3"
          >
            Visit Website <BsArrowDownRightSquare />
          </Link>
        )}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full relative aspect-square">
              <Image
                src={ImageProfile}
                alt={ImageProfileAlt}
                fill
                quality={100}
                className="object-cover rounded-full"
              />
            </div>
            <span className="font-medium text-muted-foreground">{Author}</span>
          </div>

          <span className="text-muted-foreground text-sm">{DateBlog}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Blog;
