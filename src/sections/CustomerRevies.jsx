import { reviews } from "../constents"
import ReviewCard from "../components/ReviewCard"

const CustomerRevies = () => {
    return(
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Custumers</span>Say?</h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum exercitationem molestias minus quasi molestiae!</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((revie) => (
                    <ReviewCard key={revie.customerName} imgURL = {revie.imgURL} customerName = {revie.customerName} rating = {revie.rating} feedback = {revie.feedback}/>
                ))}
            </div>
        </section>
    )
}

export default CustomerRevies