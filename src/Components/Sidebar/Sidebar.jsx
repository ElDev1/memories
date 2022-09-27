import { AiFillPicture, AiOutlineTags } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlinePicture } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

export const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col ml-80 flex-shrink-0 antialiased bg-sky-100 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>Sidebar Navigation By iAmine</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
              </div>
            </li>
            <li>
              <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-cyan-500 pr-6">
                <div className="inline-flex justify-center items-center ml-4">
                  <AiOutlineTags />
                  <span className="ml-2 text-sm tracking-wide truncate">Search by tags</span>
                </div>
              </div>
                <div className="pr-10 pl-3">
                  <label>
                  <input
                      type="text"
                      name="title"
                      className="
                          w-full
                          block px-4 py-2 mt-2
                          border-gray-300
                          rounded-md
                          text-gray-400
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                      "
                  />
                  </label>
              </div>
            </li>
            <li>
              <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-cyan-500 pr-6">
                <div className="inline-flex justify-center items-center ml-4">
                  <AiOutlineUser />
                  <span className="ml-2 text-sm tracking-wide truncate">Search by User Name</span>
                </div>
              </div>
                <div className="pr-10 pl-3">
                  <label>
                  <input
                      type="text"
                      name="title"
                      className="
                          w-full
                          block px-4 py-2 mt-2
                          border-gray-300
                          rounded-md
                          text-gray-400
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                      "
                  />
                  </label>
              </div>
            </li>
            <li>
              <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-cyan-500 pr-6">
                <div className="inline-flex justify-center items-center ml-4">
                  <AiOutlineHeart />
                  <span className="ml-2 text-sm tracking-wide truncate">Your likes</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
