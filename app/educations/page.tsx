import HeroText from "@/components/hero-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { IoTime } from "react-icons/io5";

const educations = [
  {
    imageUrl: "/smk.png",
    alt: "SMK PGRI I TRANSPRAM II",
    schoolName: "SMKS PGRI I TRANSPRAM II",
    major: "Computer and Network Engineering",
    class: "Class XII",
    status: "is undertaking",
    address: "Jl PLP 2 RP Transpram II, Desa Rajabasa Lama II Labuhan Ratu.",
    period: "17 Juli 2023 s/d Now",
  },
  {
    imageUrl: "/tut-wuri.png",
    alt: "SMP NEGRI 1 LABUHAN RATU",
    schoolName: "SMP NEGRI 1 LABUHAN RATU",
    major: "No Major",
    class: "Class IX",
    status: "Graduate",
    address: "Jl. Mayor Sutiman No. 1, Kabupaten Lampung Timur, Lampung",
    period: "18 Desember 2020 s/d 12 Januari 2023",
  },

  {
    imageUrl: "/tut-wuri.png",
    alt: "SD NEGRI 1 RAJA BASALAMA",
    schoolName: "SD NEGRI 1 RAJA BASALAMA",
    major: "No Major",
    class: "Class VI",
    status: "Graduate",
    address: "Jl. Rajabasa Lama, KAMPUNG BARU, Kec. Labuhan Ratu.",
    period: "1 Januari 2014 s/d 8 Desember 2020",
  },

  {
    imageUrl: "/tut-wuri.png",
    alt: "TK PERTIWI RAJA BASALAMA",
    schoolName: "TK PERTIWI RAJA BASALAMA",
    major: "No Major",
    class: "Big Zero",
    status: "Graduate",
    address: "Jl. Rajabasa Lama, KAMPUNG BARU, Kec. Labuhan Ratu.",
    period: "5 Januari 2012 s/d 1 Desember 2014",
  },
];

export default function EducationsPage() {
  return (
    <>
      <HeroText
        title="Educational background"
        description="I completed my education from elementary school through senior high school at this institution. The supportive learning environment helped me grow not only academically, but also in building strong character and discipline."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
        {educations.map((edu, index) => (
          <Card
            key={index}
            className="border-accent/80 w-full relative p-5 rounded"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 w-full">
              <div>
                <Image
                  src={edu.imageUrl}
                  alt={edu.alt}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <div>
                <h1 className="font-semibold text-white">{edu.schoolName}</h1>

                <p className="text-foreground/80 text-sm mb-2">{edu.major}</p>

                <p className="text-sm text-foreground/80 mb-2">
                  {edu.class} • <Badge>{edu.status}</Badge>
                </p>

                <p className="text-sm mb-2">{edu.address}</p>

                <p className="inline-flex items-center gap-3 text-sm">
                  <IoTime />
                  {edu.period}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
