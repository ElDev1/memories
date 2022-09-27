import React, { useState } from "react";

export const Card = ({createdBy, date, image, likedBy, likes, tags, text, title}) => {
  const [count, setCount] = useState(0);
  console.log(date)

  //const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

  //console.log(month, day, year)

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

    <div className="max-w-lg ml-10 rounded overflow-hidden shadow-lg bg-white">
      <div className="w-full h-80" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
        <div className="bg-black/50 inline-block rounded-lg p-2 m-2">
          <p className="text-white">{createdBy.userName}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {text}
        </p>
      </div>
      <div>
        <p></p>
      </div>
      <div className="px-6 pt-4 pb-2"> 
        {tags.map(tag => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>)}
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
             {createdBy.userName === localStorage.getItem('userName') ? (
                <>
                  <button className="font-medium text-sm text-sky-600 p-1">
                    Edit
                  </button>
                  <button className="font-medium text-sm text-red-600 p-1">
                    Delete
                  </button>
                </>
             ) : null 
            }
           </div>
         </div>
      </div>
  )
}


