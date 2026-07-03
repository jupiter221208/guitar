"use client";

type ButtonProps = {
  title: string;
  onClick: () => void;
  width?: number | string;
  height?: number | string;
  titleSize?: number | string;
  borderRadius?: number | string;
};

export default function Button({
  title,
  onClick,
  width,
  height,
  titleSize = 16,
  borderRadius = 6,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-2 border-transparent bg-cover bg-center px-8 py-3 font-semibold text-black tracking-wide transition-transform duration-150 active:scale-95 hover:brightness-110"
      style={{
        width,
        height,
        fontSize: titleSize,
        borderRadius,
        backgroundImage:
          "url(/button-background.png), linear-gradient(180deg, #fdd061 0%, #f89e0a 45%, #dd8c04 75%, #a85f02 100%)",
        backgroundOrigin: "border-box, border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.4), inset 0 0 0 2px rgba(0,0,0,0.85)",
      }}
    >
      {title}
    </button>
  );
}
