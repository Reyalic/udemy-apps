import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)

  return (
    <div>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Loading...</h2>)
        }
        <div className='card-grid'>
            {
                images.map(image => (
                    <GifItem 
                        key={image.id}
                        image={image} 
                    />
                ))
            }
        </div>

    </div>
  )
}

export default GifGrid