import './card.css';
import Card from './card';

function App() {
  return (
    <div className="App">
      <Card
        title='Title 1'
        subtitle='Subtitle 1'
        description='Hello world 1!'
        bgcolor='red'/>
      <Card 
        title='Title 2'
        subtitle='Subtitle 2'
        description='Hello world 2!'
        bgcolor='blue'/>
      <Card 
        title='Title 3'
        subtitle='Subtitle 3'
        description='Hello world 3!'
        bgcolor='purple'/>
      <Card 
        title='Title 4'
        subtitle='Subtitle 4'
        description='Hello world 4!'
        bgcolor='pink'/>
    </div>
  );
}

export default App;
