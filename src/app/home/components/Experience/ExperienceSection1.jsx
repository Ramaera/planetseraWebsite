import experience1 from "@assets/images/experience-1.webp"
import experience2 from "@assets/images/experience-2.webp"
import experience3 from "@assets/images/experience-3.webp"
import experience4 from "@assets/images/experience-4.webp"
import experience5 from "@assets/images/experience-5.webp"
import experience6 from "@assets/images/experience-6.webp"
const ExperienceSection1 = () => {
  return (
    <>
      <div
        className="basis-6/12 pl-14 desktop-display"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>

      <div className="basis-6/12 pl-14 mobile-display">
        <div className="flex m-1 md:-m-2">
          <div className="flex flex-wrap">
            <div className="w-1/2 mr-3 ">
              <img alt="masala" src={experience1} />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex items-end">
              <img alt="masala" src={experience2} />
            </div>
          </div>
        </div>
        <div className="flex md:-m-2">
          <div className="basis-4/12 mt-5 mr-3">
            <img alt="masala" src={experience3} />
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <img alt="masala" src={experience4} />
          </div>

          <div className="basis-4/12 mt-5 mr-3">
            <div className="basis-4/12">
              <img alt="masala" src={experience5} />
            </div>
            <div className="basis-4/12">
              <img alt="masala" src={experience6} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceSection1
