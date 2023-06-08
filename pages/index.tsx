import { BestProduct } from "@/assest/ProductDetial";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { Text } from "@/components/Text/Text";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="top-container">
        <div>
          <Text
            heading="The best furniture store in town"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textCenter={false}
            reSize
          />
          <div className="mt-6">
            <Button btnText="Explore" />
          </div>
        </div>
        <div className=" h-[580px]">hello</div>
      </section>
      <section className="bottom-container">
        <div className=" mb-[88px]">
          <Text
            heading="Best of the best"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textCenter={true}
          />
        </div>
        <div className="card-length">
          <Card product={BestProduct} />
        </div>
        <div className=" mt-40 flex">
          <div>
            <Text
              heading="See happy customer experience"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textCenter={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
