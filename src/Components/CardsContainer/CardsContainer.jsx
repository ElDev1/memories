import { Card } from '../Card/Card'
import { getMemories } from '../../services/firebase'

export const CardsContainer = ({memoriesList, myMemories, setMemoriesList}) => {
  
  const handleDelete = () => {
    getMemories().then(res => setMemoriesList(res))
  }
  
  return (
    <div className='p-10 columns-md w-full'>
        {memoriesList.map(memorie => <Card key={memorie.id} id={memorie.id} createdBy={memorie.createdBy} date={memorie.date} image={memorie.image} likedBy={memorie.likedBy} likes={memorie.likes} tags={memorie.tags} text={memorie.text} title={memorie.title} myMemories={myMemories} handleDelete={handleDelete}/>)}
    </div>
  )
}
