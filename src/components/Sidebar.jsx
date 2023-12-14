const Sidebar = () => {
  return (
    <div className="flex flex-col min-w-fit bg-white space-y-3 py-5 drop-shadow-xl min-h-screen px-5 ">
      <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
        Recents
      </span>
      <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
        Drafts
      </span>
      <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
        Trash
      </span>
      <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
        Posted
      </span>
    </div>
  );
};

export default Sidebar;
