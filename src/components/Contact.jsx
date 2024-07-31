
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
export default function Contact() {
  return (
 
      <section id="contact">
      <div className="wrapper">
      <h1>Contact Us</h1>
      <p><SiGooglestreetview />: Jalan Ahmad Yani,Bandung,Jawa Barat</p>
      <p> <FaWhatsapp /> : 083164391815</p>
      <p> <SiGmail /> : ahmadpahlevi16@gmail.com</p>
      </div>
    </section>
  )
}
