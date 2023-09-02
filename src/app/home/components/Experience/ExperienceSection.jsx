import ExperienceSection2 from "./ExperienceSection2";
import ExperienceSection3 from "./ExperienceSection3";

function ExperienceSection() {
  return (
    <div className="md:flex w-full px-5 py-2 mx-auto  relative 2xl:flex 2xl:justify-center ">
      <ExperienceSection3 />
      <ExperienceSection2 />
    </div>
  );
}

export default ExperienceSection;
