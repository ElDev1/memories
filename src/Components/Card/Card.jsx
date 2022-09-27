import React, { useState } from "react";

export const Card = ({createdBy, date, image, likedBy, likes, tags, text, title}) => {
  const [count, setCount] = useState(0);
  console.log(tags)
  return (
    // <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    //   <img
    //     className="rounded-t-lg h-40 w-full"
    //     src={image}
    //     alt="memorie img"
    //   />
    //   <div className="p-5">
    //     <div className="font-normal text-stone-500 text-sm p-1">
    //       {tags.map(tag => <span className="p1">#{tag}</span>)}
    //     </div>
    //     <h5 className="mb-2 text-2xl font-semibold tracking-tight text-sky-500">
    //       {title}
    //     </h5>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {text}
    //     </p>
    //     <div className="flex items-center justify-between">
    //       <div className="flex text-sky-500">
    //         <i
    //           onClick={() => setCount(count + 1)}
    //           className="fa-solid fa-thumbs-up m-2 active:text-sky-200"
    //         ></i>
    //         <span className="m-2 text-sm">{count}</span>
    //       </div>
    //       <div>
    //         <button className="font-medium text-sm text-sky-600 p-1">
    //           Edit
    //         </button>
    //         <button className="font-medium text-sm text-red-600 p-1">
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="w-full h-80" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>

      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>backgroundSize: 'cover'
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
      <div className="flex items-center justify-between">
           <div className="flex text-sky-500">
             <i
               onClick={() => setCount(count + 1)}
               className="fa-solid pl-1 fa-thumbs-up m-1 active:text-sky-200"
             ></i>
             <span className="m-1 text-sm">{count}</span>
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
  )
}


