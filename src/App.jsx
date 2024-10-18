import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="bg-rose100 p-6">
      <Header />
      <Desserts />
      <section>
        <Cart title={`Your Cart (${7})`} />
      </section>
    </main>
  );
};

export default App;
