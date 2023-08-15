import online from "../assets/images/icon-online.svg";
import budget from "../assets/images/icon-budgeting.svg";
import onboard from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";

export default function About() {
  return (
    <>
      <div className="about bg-[#f3f4f6] w-[100%] lg:p-6">
        <div className="about-container flex flex-col p-6 pb-20 lg:mt-8 mt-20 text-center lg:text-left gap-12 w-[100%] text-[#9698a6]">
          <div className="about-header flex flex-col gap-6 mt-12 w-[100%]">
            <h1 className="text-4xl text-[#2d314d]">Why choose Easybank?</h1>
            <p className="w-[100%] lg:w-[45%] ">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="about-list w-[100%] flex flex-col items-center justify-center gap-8 lg:flex lg:flex-row lg:justify-start lg:items-start lg:text-left">
            <div className="flex flex-col items-center justify-center lg:items-start gap-8 ">
              <img
                src={online}
                alt="online-banking-icon"
                className="w-[20%] lg:w-[25%] "
              />
              <h1 className="text-xl text-[#2d314d]">Online Banking</h1>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start gap-8">
              <img
                src={budget}
                alt="budget-icon"
                className="w-[20%] lg:w-[25%]"
              />
              <h1 className="text-xl text-[#2d314d]">Simple Budgeting</h1>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you are close to hitting your limits.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start gap-8">
              <img
                src={onboard}
                alt="onboarding-icon"
                className="w-[20%] lg:w-[25%]"
              />
              <h1 className="text-xl text-[#2d314d]">Fast Onboarding</h1>
              <p>
                We do not do branches. Open your account in minutes online and
                start taking control of your finances.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start gap-8">
              <img src={api} alt="api-icon" className="w-[20%] lg:w-[25%]" />
              <h1 className="text-xl text-[#2d314d]">Open API</h1>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
