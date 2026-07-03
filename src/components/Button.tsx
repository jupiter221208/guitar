"use client";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-cover bg-center px-8 py-3 font-semibold text-black tracking-wide shadow-[0_2px_6px_rgba(0,0,0,0.4)] transition-transform duration-150 active:scale-95 hover:brightness-110"
      style={{ backgroundImage: "url(/button-background.png)" }}
    >
      {title}
    </button>
  );
}
