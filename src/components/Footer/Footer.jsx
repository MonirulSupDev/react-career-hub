import logo from "../../assets/images/logos/careerhub-logo-white-172x44.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-15 md:py-32.5 px-2 xl:px-0">
      <div className="footer max-w-330 mx-auto sm:footer-horizontal md:grid-cols-12">
        <aside className="md:col-span-3 xl:pr-8.75 gap-4">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <p className="text-base text-white/70 md:hidden xl:block">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-3.75">
            <a href="#" className="social-icon">
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.89036 11.1134L10.4377 7.53924H7.0087V5.21603C7.0087 4.23873 7.48897 3.28376 9.02474 3.28376H10.5829V0.240139C10.5829 0.240139 9.16994 0 7.81288 0C4.98706 0 3.13856 1.71448 3.13856 4.81394V7.53924H0V11.1134H3.13856V19.7584H7.00311V11.1134H9.89036Z"
                  fill="#337FFF"
                />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9063 2.37155C23.1412 2.7178 22.3035 2.92443 21.477 3.06405C21.8679 2.99703 22.4432 2.29337 22.6721 2.00297C23.024 1.56737 23.3144 1.07034 23.4763 0.534214C23.4986 0.489537 23.5154 0.439278 23.4707 0.40577C23.4205 0.383431 23.3814 0.394599 23.3423 0.416937C22.4264 0.908384 21.477 1.2658 20.4606 1.51711C20.3768 1.53945 20.3154 1.51711 20.2596 1.46684C20.1758 1.37191 20.0976 1.28255 20.0083 1.20995C19.5838 0.846952 19.1259 0.562137 18.6121 0.355506C17.9364 0.0818597 17.1992 -0.0354188 16.4732 0.00925813C15.7639 0.0539351 15.0715 0.254985 14.446 0.584477C13.8149 0.91397 13.2565 1.37191 12.8097 1.9192C12.3462 2.48883 12.0055 3.16457 11.8324 3.8794C11.6648 4.56631 11.676 5.24763 11.7821 5.94571C11.7989 6.06299 11.7877 6.07416 11.6816 6.06299C7.72768 5.4766 4.44951 4.05811 1.79123 1.03124C1.67395 0.897214 1.61252 0.897216 1.51758 1.04242C0.355984 2.78482 0.92003 5.5883 2.37203 6.9677C2.56749 7.15199 2.76295 7.33628 2.98075 7.50382C2.90257 7.52057 1.93643 7.41447 1.07081 6.9677C0.953538 6.8951 0.897692 6.93419 0.886523 7.06822C0.875353 7.25809 0.892107 7.43122 0.92003 7.63226C1.14341 9.40259 2.36645 11.0389 4.04742 11.6755C4.24846 11.7593 4.46626 11.8319 4.68406 11.871C4.30431 11.9548 3.9078 12.0162 2.81322 11.9268C2.67919 11.8989 2.62334 11.9715 2.67919 12.1C3.50012 14.345 5.28162 15.0151 6.61076 15.3949C6.78946 15.4284 6.96817 15.4284 7.14688 15.4675C7.13571 15.4842 7.12454 15.4842 7.11337 15.501C6.67219 16.1767 5.142 16.6738 4.42717 16.9251C3.13154 17.3774 1.71863 17.5841 0.350399 17.45C0.132599 17.4165 0.0823374 17.4221 0.0264912 17.45C-0.0349396 17.4891 0.0209065 17.5394 0.087922 17.5952C0.367153 17.7795 0.646384 17.9415 0.936784 18.0978C1.80798 18.5614 2.71269 18.9244 3.66208 19.1868C8.56537 20.5383 14.083 19.5443 17.7632 15.8919C20.6505 13.0214 21.6669 9.06193 21.6669 5.09685C21.6669 4.94048 21.8512 4.85671 21.9573 4.77294C22.7112 4.2089 23.3144 3.53316 23.8784 2.77923C24.0068 2.61169 24.0068 2.46091 24.0068 2.39948C24.0068 2.38831 24.0068 2.37714 24.0068 2.37714C24.0068 2.31012 24.0068 2.32688 23.9063 2.37155Z"
                  fill="#33CCFF"
                />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.112 3.52954C14.4697 3.52954 13.9559 4.04891 13.9559 4.68556C13.9559 5.32779 14.4753 5.84158 15.112 5.84158C15.7542 5.84158 16.268 5.3222 16.268 4.68556C16.2736 4.04891 15.7542 3.52954 15.112 3.52954Z"
                  fill="url(#paint0_linear_4_391)"
                />
                <path
                  d="M9.96293 5.01489C7.28231 5.01489 5.09873 7.19848 5.09873 9.8791C5.09873 12.5597 7.28231 14.7433 9.96293 14.7433C12.6435 14.7433 14.8271 12.5597 14.8271 9.8791C14.8271 7.19848 12.6435 5.01489 9.96293 5.01489ZM9.96293 13.0009C8.24287 13.0009 6.84671 11.6047 6.84671 9.88468C6.84671 8.16462 8.24287 6.76846 9.96293 6.76846C11.683 6.76846 13.0791 8.16462 13.0791 9.88468C13.0791 11.5992 11.683 13.0009 9.96293 13.0009Z"
                  fill="url(#paint1_linear_4_391)"
                />
                <path
                  d="M13.8275 19.764H5.93645C2.66386 19.764 0 17.1001 0 13.8275V5.93645C0 2.66386 2.66386 0 5.93645 0H13.8275C17.1001 0 19.764 2.66386 19.764 5.93645V13.8275C19.7584 17.1001 17.1001 19.764 13.8275 19.764ZM5.93645 1.85968C3.69143 1.85968 1.85968 3.68585 1.85968 5.93645V13.8275C1.85968 16.0725 3.68585 17.9043 5.93645 17.9043H13.8275C16.0781 17.9043 17.9043 16.0781 17.9043 13.8275V5.93645C17.9043 3.69143 16.0781 1.85968 13.8275 1.85968H5.93645Z"
                  fill="url(#paint2_linear_4_391)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4_391"
                    x1="6.06063"
                    y1="-3.97524"
                    x2="23.9807"
                    y2="13.1772"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0011048" stopColor="#FBE18A" />
                    <stop offset="0.2094" stopColor="#FCBB45" />
                    <stop offset="0.3765" stopColor="#F75274" />
                    <stop offset="0.5238" stopColor="#D53692" />
                    <stop offset="0.7394" stopColor="#8F39CE" />
                    <stop offset="1" stopColor="#5B4FE9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4_391"
                    x1="1.0042"
                    y1="1.30732"
                    x2="18.9242"
                    y2="18.4598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0011048" stopColor="#FBE18A" />
                    <stop offset="0.2094" stopColor="#FCBB45" />
                    <stop offset="0.3765" stopColor="#F75274" />
                    <stop offset="0.5238" stopColor="#D53692" />
                    <stop offset="0.7394" stopColor="#8F39CE" />
                    <stop offset="1" stopColor="#5B4FE9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_4_391"
                    x1="0.965413"
                    y1="1.34802"
                    x2="18.8853"
                    y2="18.5003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0011048" stopColor="#FBE18A" />
                    <stop offset="0.2094" stopColor="#FCBB45" />
                    <stop offset="0.3765" stopColor="#F75274" />
                    <stop offset="0.5238" stopColor="#D53692" />
                    <stop offset="0.7394" stopColor="#8F39CE" />
                    <stop offset="1" stopColor="#5B4FE9" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </aside>
        <div className="md:col-span-9 footer gap-7 md:gap-0 sm:footer-horizontal justify-between xl:pl-25">
          <nav>
            <h6 className="text-xl text-white font-semibold mb-2">Company</h6>
            <a className="link link-hover text-base text-white/70">About Us</a>
            <a className="link link-hover text-base text-white/70">Work</a>
            <a className="link link-hover text-base text-white/70">
              Latest News
            </a>
            <a className="link link-hover text-base text-white/70">Careers</a>
          </nav>
          <nav>
            <h6 className="text-xl text-white font-semibold mb-2">Product</h6>
            <a className="link link-hover text-base text-white/70">Prototype</a>
            <a className="link link-hover text-base text-white/70">
              Plans & Pricing
            </a>
            <a className="link link-hover text-base text-white/70">Customers</a>
            <a className="link link-hover text-base text-white/70">
              Integrations
            </a>
          </nav>
          <nav>
            <h6 className="text-xl text-white font-semibold mb-2">Support</h6>
            <a className="link link-hover text-base text-white/70">Help Desk</a>
            <a className="link link-hover text-base text-white/70">Sales</a>
            <a className="link link-hover text-base text-white/70">
              Become a Partner
            </a>
            <a className="link link-hover text-base text-white/70">
              Developers
            </a>
          </nav>
          <nav>
            <h6 className="text-xl text-white font-semibold mb-2">Contact</h6>
            <p className="text-base text-white/70">524 Broadway , NYC</p>
            <a
              href="tel:+17779785570"
              className="link link-hover text-base text-white/70"
            >
              +1 777 - 978 - 5570
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-330 mx-auto h-px gradient-bg my-12.5 opacity-40"></div>
      <div className="max-w-330 mx-auto text-sm text-white/40 md:flex justify-between">
        <div>
          &copy;2026 <span className="font-semibold">CareerHub</span>. All
          Rights Reserved.
        </div>
        <div>
          Powered by <span className="font-semibold">CareerHub</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
