import Button from "./Button";

export default function Recent() {
  const CardList = ["Recent 1", "Recent 2", "Recent 3", "Recent 4", "Recent 5"];
  return (
    <>
      <div className="w-full flex flex-col h-full bg-yellow-200 m-8">
        <div className="w-full flex flex-row justify-between">
          <span className="text-3xl font-semibold">Recent</span>
          <Button>Add Design</Button>
        </div>
        <div className="grid grid-cols-4 grid-rows-2">
          {CardList.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}
