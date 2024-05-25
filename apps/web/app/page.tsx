import Image from "next/image";
import FunFact from "./_component/FunFact";

const Home = () => {
  return (
    <article>
      <header>
        <Image src="/funfact.png" alt="FunFact Logo" width={100} height={100} />
        <h1>FunFact</h1>
      </header>

      <main>
        <FunFact />

        <section>
          <h2>Daily Recommended</h2>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 FunFact</p>
      </footer>
    </article>
  );
};

export default Home;
