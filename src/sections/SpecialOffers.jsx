import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            <span className="text-coral-red">Special</span>
            Offer
          </h2>
          <p className="max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus at, cumque voluptas odit neque!</p>
          <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Show now" iconURL = {arrowRight} />
            <Button label="Learn More" backgroundColor="bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"></Button>

          </div>
      </div>
    </section>
  )
}

export default SpecialOffers