import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";

export function Table({
  header,
  data,
}: {
  header: string[];
  data: { value: string; year: number; emoji?: string; active?: boolean }[];
}) {
  let [leftHeader, rightHeader] = header;

  return (
    <div className="overflow-x-auto  w-full border dark:border-zinc-300/50 rounded-sm border-black/50 dark:text-zinc-300 text-black  ">
      <div>
        <div className="flex text-xl w-full border-b dark:border-zinc-300/50 border-black/50">
          <div className="p-2 w-2/5 border-r">{leftHeader}</div>
          <div className="p-2 w-3/5">{rightHeader}</div>
        </div>
      </div>
      <div>
        {data.map((obj, index) => {
          let borderBottom = index === data.length - 1 ? "" : " border-b ";
          let inactive = obj.active == false ? "" : "";

          return (
            <div
              key={index}
              className={`flex w-full ${borderBottom} border-black/50 dark:border-zinc-300/50 ${obj.active ? "bg-emerald-500/20" : " bg-amber-100/20"}`}
            >
              <div className={"p-4 w-2/5 border-r " + inactive}>
                {obj.value}
              </div>
              <div className="p-4 w-3/5">
                {" "}
                <CheckBox emoji={obj.emoji!} year={obj.year}></CheckBox>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CheckBox({ year, emoji }: { year: number; emoji: string }) {
  let fillValue = new Array(10)
    .fill(0)
    .map((item, index) => (year > index ? 1 : 0));

  return (
    <div className="p-1 flex gap-2 items-center">
      {emoji}
      <div className="flex gap-1">
        {fillValue.map((item, index) => {
          let checked =
            " bg-green-600 border dark:border-white/60  border-black/40 h-[14px] w-[14px]";
          let unchecked =
            " bg-white/20 border dark:border-white/60  border-black/40 h-[14px] w-[14px]";

          return (
            <div className="" key={index}>
              {item == 1 ? (
                <div className={checked} />
              ) : (
                <div className={unchecked} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
