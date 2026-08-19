import React from "react";
import Image from "next/image";
import moment from "moment";

type DesktopCoverProps = {
  data?: any;
};

const DesktopCover: React.FC<DesktopCoverProps> = ({ data }) => {
  const groomName = data?.dataEvent?.groomName ?? "Albert";
  const brideName = data?.dataEvent?.brideName ?? "Jessica";

  const eventDate = data?.dataEvent?.date
    ? moment(data.dataEvent.date).format("dddd · D MMM YYYY")
    : "Saturday · 12 Sep 2026";

  const primaryImage = data?.dataContent?.primaryImageData?.[0]?.url;
  const coverImageSrc = primaryImage
    ? `https://media.twinklebook.com/${primaryImage}`
    : "/images/Albert-Jessica/DekstopCover/pengantindekstop.jpeg";

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <Image
        src={coverImageSrc}
        alt={`${groomName} & ${brideName} Wedding Cover`}
        fill
        priority
        className="object-cover object-[50%_15%]"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">
        <p className="font-lora text-[16px] text-white uppercase">
          The Wedding of
        </p>
        <h1 className="font-marcellus text-[60px] uppercase">
          {groomName} & {brideName}
        </h1>
        <p className="font-lora text-[16px] leading-6">{eventDate}</p>
      </div>
    </div>
  );
};

export default DesktopCover;