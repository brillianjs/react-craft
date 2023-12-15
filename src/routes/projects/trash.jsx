import Button from "../../components/Button";

const Trash = () => {
  return (
    <div className="w-full flex flex-col space-y-7">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-700">Trash Projects</h1>
      </div>
      <div className="w-full border border-b-0"></div>
      <div className="w-full">
        <div className="text-base border-2 border-dashed text-gray-500  p-5 rounded-lg">
          <h1 className="text-center">There are no recent projects.</h1>
        </div>
      </div>
    </div>
  );
};

export default Trash;
