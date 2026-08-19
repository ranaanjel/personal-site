export function UpdateDate({ date, text }: { date: string; text: string }) {
  return (
    <div className="flex items-center space-x-4 my-4">
      <div className="text-sm text-gray-900/50 dark:text-zinc-300/50 min-w-12 md:w-auto">
        {date}
      </div>
      <div className="text-md text-gray-900 dark:text-zinc-300">{text}</div>
    </div>
  );
}
