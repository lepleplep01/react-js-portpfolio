
import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
function About() {
  return (
    <section id='about'>
      <div className='wrapper'>
        <h3>about</h3>
        <p>Saya adalah seorang fresh graduate dari Telkom University dengan jurusan D3 Teknologi Komputer. Saya memiliki minat yang besar dalam bidang pengembangan perangkat lunak dan jaringan komputer. Selama masa studi, saya aktif terlibat dalam berbagai proyek yang melibatkan pemrograman, jaringan komputer ,web developer dan analisis data. Saya selalu mencari kesempatan untuk menerapkan pengetahuan teknis saya dalam situasi praktis dan terus mengembangkan keterampilan saya dalam teknologi terkini. 
        </p>
        <h4>Progaming Language & Tools </h4>
        <div className='skills'>
        <FaHtml5 />
        <BsFiletypeCss />
        <FaPhp />
        <IoLogoJavascript />
        <RiReactjsFill />
        <FaLaravel />
        <FaBootstrap />
        <RiTailwindCssFill />
        <FaNetworkWired />
        <FaGithub />
        <SiMysql />
        </div>
      </div>
    </section>
  )
}

export default About