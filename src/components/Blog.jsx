import currency from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";

function Blog() {
  return (
    <div className="blog p-6 text-[#9698a6] lg:p-12 bg-[#fafafa]">
      <div className="blog-container pt-14">
        <h1 className="text-center lg:text-left text-3xl mb-8 text-[#2d314d]">
          Latest Articles
        </h1>
        <div className="blog-article flex flex-col gap-10 lg:flex lg:flex-row">
          <div className="blog article-list">
            <img
              src={currency}
              alt="currency-blog-image"
              className="rounded-t-md h-[44%]"
            />
            <div className="p-5 bg-[#ffffff]">
              <p>By Claire Robinson</p>
              <h1 className="text-xl my-2 text-[#2d314d] active:text-[#31d35c] cursor-pointer">
                Receive money in any currency with no fees
              </h1>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>

          <div className="blog article-list">
            <img
              src={restaurant}
              alt="restaurant-blog-image"
              className="rounded-t-md"
            />
            <div className="p-5 bg-[#ffffff]">
              <p>By Wilson Hutton</p>
              <h1 className="text-xl my-2 text-[#2d314d] active:text-[#31d35c] cursor-pointer">
                Treat yourself without worrying about money
              </h1>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>

          <div className="blog article-list">
            <img src={plane} alt="plane-blog-image" className="rounded-t-md" />
            <div className="p-5 bg-[#ffffff]">
              <p>By Wilson Hutton</p>
              <h1 className="text-xl my-2 text-[#2d314d] active:text-[#31d35c] cursor-pointer">
                Take your Easybank card wherever you go
              </h1>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className="blog article-list">
            <img
              src={confetti}
              alt="confetti-blog-image"
              className="rounded-t-md"
            />
            <div className="p-5 bg-[#ffffff]">
              <p>By Claire Robinson</p>
              <h1 className="text-xl my-2 text-[#2d314d] active:text-[#31d35c] cursor-pointer">
                Our invite-only Beta accounts are now live!
              </h1>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
