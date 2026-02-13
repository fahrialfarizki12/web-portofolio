import HeroText from "@/components/hero-text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbAward } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import HeroAbout from "@/components/hero-about";
export default function AboutPage() {
  return (
    <>
      <HeroText
        title="About Me"
        description="Here is a brief overview about myself and why I became a programmer"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
        <Card className="border-accent/80 w-full relative rounded ">
          <Badge className="absolute top-0 left-0 rounded">Front-End</Badge>
          <Badge className="absolute top-0 right-0 rounded">Back-End</Badge>
          <Badge className="absolute bottom-0 right-0 rounded">
            Designer Database
          </Badge>
          <Badge className="absolute bottom-0 left-0 rounded">
            Designer Website
          </Badge>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <TbAward className="text-5xl sm:text-7xl" />
              </div>
            </CardTitle>
            <CardDescription className="text-center">6 Years</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-center">Experience</p>
          </CardContent>
        </Card>

        <Card className="border-accent/80 w-full relative rounded ">
          <Badge className="absolute top-0 left-0 rounded">Perfect</Badge>

          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <FaBox className="text-5xl sm:text-7xl" />
              </div>
            </CardTitle>
            <CardDescription className="text-center">
              10 Project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-center">
              Productions & Development
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="my-20">
        <HeroAbout />
      </div>
    </>
  );
}
