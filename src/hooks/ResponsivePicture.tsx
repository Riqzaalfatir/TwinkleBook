import { getImageProps } from "next/image";

type Props = {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  objectPositionMobile?: string;
  objectPositionDesktop?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
};

const ResponsivePicture = ({
  mobileSrc,
  desktopSrc,
  alt,
  className,
  objectPositionMobile,
  objectPositionDesktop,
  fill = true,
  width,
  height,
  priority = false,
  unoptimized = false,
}: Props) => {
  const baseClassName =
    className ?? (fill ? "absolute inset-0 w-full h-full object-cover" : "");

  const hasCustomPosition = objectPositionMobile || objectPositionDesktop;

  const resolvedClassName = hasCustomPosition
    ? `${baseClassName} [object-position:var(--op-m)] lg:[object-position:var(--op-d)]`
    : baseClassName;

  const style = hasCustomPosition
    ? ({
        "--op-m": objectPositionMobile || "center",
        "--op-d": objectPositionDesktop || objectPositionMobile || "center",
      } as React.CSSProperties)
    : undefined;

  const common = fill
    ? { alt, fill: true, priority, unoptimized }
    : { alt, width, height, priority, unoptimized };

  const {
    props: { srcSet: desktopSrcSet, src: desktopSrcOnly },
  } = getImageProps({ ...common, src: desktopSrc });
  const {
    props: { srcSet: mobileSrcSet, src: mobileSrcOnly, ...mobileProps },
  } = getImageProps({ ...common, src: mobileSrc });

  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={desktopSrcSet || desktopSrcOnly}
      />
      <img
        {...mobileProps}
        srcSet={mobileSrcSet || mobileSrcOnly}
        className={resolvedClassName}
        style={{ ...(mobileProps as any).style, ...style }}
      />
    </picture>
  );
};

export default ResponsivePicture;