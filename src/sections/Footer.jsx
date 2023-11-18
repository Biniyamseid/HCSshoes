import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";


const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <img
            src={footerLogo} 
            height={100}
            width={100}>
            </img>
          </div>
          <div>
          Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </div>
          <div id="" className="flex mt-8 items-center gap-5 ">
          {socialMedia.map((icon) => (
              <div
                className="flex bg-white h-12 w-12 gap-6 rounded-full justify-center"
                key={icon.alt}
              >
                <img className="" src={icon.src} alt={icon.alt} width={24} height={24} />
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;