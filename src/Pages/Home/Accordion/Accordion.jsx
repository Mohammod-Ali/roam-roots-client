import { PiHandCoinsDuotone } from "react-icons/pi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";



const Accordion = () => {
    return (
        <div >
            <div className="collapse collapse-arrow bg-base-200 my-10 p-4">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium  flex items-center">
    <MdOutlineTravelExplore className="size-12 text-orange-400 mr-5"></MdOutlineTravelExplore>
    Tavel Insurance
  </div>
  <div className="collapse-content"> 
    <p>Travel insurance from RoamRoots provides comprehensive coverage for unexpected events during your journey. Protect yourself against trip cancellations, medical emergencies, lost baggage, and other unforeseen incidents, ensuring peace of mind while you explore the world. Travel with confidence, knowing RoamRoots has you covered every step of the way.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-10 p-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium flex items-center">
      <PiHandCoinsDuotone className="size-12 text-orange-400 mr-5"></PiHandCoinsDuotone> Travel & Earn
  </div>
  <div className="collapse-content"> 
    <p>With RoamRoots Travel & Earn program, turn your adventures into rewards! Earn points on every trip, which can be redeemed for discounts on future travels, exclusive experiences, and special offers. Explore the world and enjoy more benefits with each journey. Travel smart, travel more, and earn along the way with RoamRoots.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-10 p-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium  flex items-center">
    <RiCustomerService2Line className="size-12 text-orange-400 mr-5"></RiCustomerService2Line>
    24/7 Customer Support
  </div>
  <div className="collapse-content"> 
    <p>RoamRoots offers 24/7 Customer Support to ensure your travel experience is smooth and worry-free. Our dedicated team is always available to assist you with any questions or issues, no matter where you are in the world. Travel with confidence, knowing RoamRoots is here to help anytime, day or night.</p>
  </div>
</div>
        </div>
    );
};

export default Accordion;