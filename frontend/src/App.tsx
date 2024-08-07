import Layout from './components/layout/layout'
import './App.css'
import CardStory from './components/home/CardStory'
import Card from './components/home/card'


function App() {


  return (
    <Layout>
      <CardStory/>
      <hr/>
      <Card/>
    </Layout>
  )
}

export default App
