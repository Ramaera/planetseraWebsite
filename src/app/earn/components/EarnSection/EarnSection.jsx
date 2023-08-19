import Link from "next/link";

const EarnSection = () => {
  const EarnReward = "/images/backgrounds/EarnReward.gif";
  return (
    <>
      <div className="bg-gray-500 w-full flex h-[100vh] items-center	flex-col md:flex-row justify-items-center	 justify-evenly p-12">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-[Montserrat] tracking-[5px] text-center">
            Earn And Get Reward
          </div>
          <div className="w-[300px]">
            <img alt="masala" src={EarnReward} />
          </div>
          <div className="m-8">
            <Link href={`/register`}>
              <div className="w-[100%] flex justify-center text-2xl rounded-full bg-slate-200 hover:bg-slate-500 hover:text-white cursor-pointer p-4">
                Register Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnSection;
