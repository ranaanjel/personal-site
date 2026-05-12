export function BlogParagraph({
  text,
  type,
  opacity = 100,
  inline,
}: {
  text: string;
  type: "small" | "normal";
  opacity?: number;
  inline:boolean
}) {
  let textSize = type == "normal" ? " text-lg " : " text-sm ";
  let opacityClass = ` text-zinc-800/${opacity} dark:text-zinc-300/${opacity} `;
  let inlineValue = inline ? " inline" : " block"

  return (
    <p className={`my-3 leading-normal z-10 ${textSize} ${opacityClass} ${inlineValue}` }>
      {text}
    </p>
  );
}

export function BlogLink({
  text,
  hrefValue,
  type,
  inline
}: {
  text: string;
  hrefValue?: string;
  type?: "normal" | "small";
  inline : boolean
}) {
 let inlineValue = inline ? " inline-block" : " block" ;
  return (

    <div className={"relative group  underline hover:font-bold hover:cursor-pointer " + inlineValue}>
      <a target="_blank"
        href={hrefValue}
        className={
          type === "small"
            ? " text-sm font-medium text-gray-900 dark:text-white"
            : "text-lg font-medium text-gray-900 dark:text-white"
        }
      >
        {text}
      </a>
    </div>
  );
}
