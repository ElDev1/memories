import { useState, useEffect } from "react";
import { deleteMemorie } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { updateMemorie, getMemories } from "../../services/firebase";


export const Card = ({createdBy, id, date, image, likedBy, likes, tags, text, title, myMemories, handleDelete, setAllMemories}) => {
  const [count, setCount] = useState(likes);
  const [alreadyLiked, setAlreadyLiked] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('email')
    const res = likedBy.find(userLike => userLike === user)
    if(res === user) {
      setAlreadyLiked(true)
    } else {
      setAlreadyLiked(false)
    }
  }, [])


  const handleLike = () => {
    const user = localStorage.getItem('email')
    const userAlreadyLiked = likedBy.find(userLike => userLike === user)
    
    if(userAlreadyLiked !== user && !alreadyLiked) {
      const newLikedBy = [...likedBy]
      newLikedBy.push(user)
      setCount(count + 1)
      updateMemorie(id, {likes:likes + 1, likedBy: newLikedBy})
      setAlreadyLiked(true)
    } 

    if(alreadyLiked && userAlreadyLiked === user) {
      const filteredLikedBy = likedBy.filter(userLike => userLike !== user)
      setCount(count - 1)
      updateMemorie(id, {likes: likes - 1, likedBy: filteredLikedBy})
      setAlreadyLiked(false)
    }
  }

  return (
    <div className="max-w-lg ml-10 rounded overflow-hidden shadow-lg bg-white ">
      <div className="w-full h-80" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
        <div className="bg-black/50 inline-block rounded-lg p-2 m-2">
          <p className="text-white">{createdBy.userName}</p>
        </div>
      </div>
      <div className="">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {text}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2"> 
          {tags.map(tag => <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>)}
        </div>
        <div className="flex items-center justify-between">
            <div className="flex text-sky-500" style={alreadyLiked ? {color:"green"} : {color:"skyBlue"} }>
              <i
                onClick={() => handleLike()}
                className="fa-solid pl-1 fa-thumbs-up m-1 active:text-sky-200"
              ></i>
              <span className="m-1 text-sm">{count}</span>
            </div>
            <div>
              {myMemories ? (
                  <>
                    <button 
                        className="font-medium text-sm text-sky-600 p-1"
                        onClick={() => {
                          navigate('/editmemorie')
                          localStorage.setItem('memorieId', id)
                        }}    
                    >
                      Change
                    </button>
                    <button 
                        className="font-medium text-sm text-red-600 p-1"
                        onClick={() => {
                          deleteMemorie(id)
                          handleDelete()
                        }}    
                    >
                      Delete
                    </button>
                  </>
              ) : null 
              }
            </div>
          </div>
        </div>
      </div>
  )
}


