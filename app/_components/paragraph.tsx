export function Paragraph({
  text,
  type,
  opacity = 100,
}: {
  text: string;
  type: "small" | "normal";
  opacity?: number;
}) {
  let textSize = type == "normal" ? " text-lg " : " text-sm ";
  let opacityClass = ` text-zinc-800/${opacity} dark:text-zinc-300/${opacity} `;

  return (
    <p className={`my-3 leading-normal z-10 ${textSize} ${opacityClass}`}>
      {text}
    </p>
  );
}
