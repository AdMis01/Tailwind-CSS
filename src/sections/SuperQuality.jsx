import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red">Super</span>
            <span className="text-coral-red">Quality</span>Shoes
          </h2>
          <p className="max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus at, cumque voluptas odit neque!</p>
          <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-10">
            <Button label="Show now" iconURL = {arrowRight} />

          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality