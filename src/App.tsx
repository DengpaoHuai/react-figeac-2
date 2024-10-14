import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div>
      <CardComponent title="valeur" description="description" />
      <CardComponent title="toto">
        <p>
          Veggie ipsum dolor sit amet, sweet potato, bell pepper, brussels
          sprout, carrot, garlic, kale, onion, pea, potato, swiss chard, tomato,
          zucchini, celery, beetroot, leek, scallion, spinach, arugula, cabbage,
        </p>
      </CardComponent>
    </div>
  );
}

export default App;
