import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <img
        class="rounded-t-lg h-40 w-full"
        src="https://i.pinimg.com/736x/5a/9b/7a/5a9b7ae26064cb7e9c11c9a306333cd7.jpg"
        alt=""
      />
      <div class="p-5">
        <div className="font-normal text-stone-500 text-sm p-1">
          <span className="p-1">#Animals</span>
          <span className="p-1">#Travel</span>
          <span className="p-1">#Mountain</span>
        </div>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-500">
          Visiting Machu Picchu
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sequi ex omnis natus quasi aspernatur laborum eaque odio illo nulla
          quos numquam voluptates molestias nam, explicabo incidunt fugit
          exercitationem earum!
        </p>
        <div className="flex items-center justify-between">
          <div className="flex text-sky-500">
            <i
              onClick={() => setCount(count + 1)}
              className="fa-solid fa-thumbs-up m-2 active:text-sky-200"
            ></i>
            <span className="m-2 text-sm">{count}</span>
          </div>
          <div>
            <button className="font-medium text-sm text-sky-600 p-1">
              Edit
            </button>
            <button className="font-medium text-sm text-red-600 p-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
