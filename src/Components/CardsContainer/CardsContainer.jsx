import { Card } from '../Card/Card'

export const CardsContainer = ({memoriesList, myMemories}) => {
  return (
    <div className=' p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
        {memoriesList.map(memorie => <Card key={memorie.id} id={memorie.id} createdBy={memorie.createdBy} date={memorie.date} image={memorie.image} likedBy={memorie.likedBy} likes={memorie.likes} tags={memorie.tags} text={memorie.text} title={memorie.title} myMemories={myMemories}/>)}
    </div>
  )
}
