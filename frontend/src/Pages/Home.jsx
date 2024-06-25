const Home = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-5 font-semibold">
        Help people to detect Melenoma Skin Cancer.
      </h1>
      <p className="text-center my-2">
        Provide the affected skin image to see if it is cancerous or not.
      </p>
      <form className="flex flex-col justify-center items-center h-full gap-5">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a file</span>
            <span className="label-text-alt">Image only</span>
          </div>
          <div>
            <label className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.5 6.5L15 5l-5 5-5-5L3.5 6.5 10 13l6.5-6.5zM4 14h12v2H4v-2z" />
              </svg>
              <span className="mt-2 text-base leading-normal text-white">
                Select an image
              </span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </label>
        <input
          className="btn btn-outline border-dashed"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Home;
