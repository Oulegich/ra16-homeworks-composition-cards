import './App.scss'
import Card from './components/Card'
import CardLink from './components/CardLink'
import CardText from './components/CardText'

function App() {

  return (
    <div className='cards'>
      <Card imgSrc={'https://img.freepik.com/free-vector/future-night-city-with-futuristic-skyscrapers_107791-996.jpg'} className={'card-img-'} position={'top'} alt={'Image cap'} styleCard={{ width: '18rem' }}>
        <CardText title={'Card title'} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}>
          <CardLink link={'#'} text='Go somewhere' />
        </CardText>
      </Card>

      <Card styleCard={{ width: '18rem' }}>
        <CardText title={'Special title treatment'} text={`With supporting text below as a natural lead-in to additional content.`}>
          <CardLink link={'#'} text='Go somewhere' />
        </CardText>
      </Card>
    </div>
  )
}

export default App
