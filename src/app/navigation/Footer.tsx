// #footer {
//   padding: 15px;
//   color: #f4f6fd;
//   font-size: 14px;
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   width: 300px;
//   z-index: 50;
//   background: #040b14;
// }
const footerTailwind = [
  "p-4",
  "text-white",
  "text-sm",
  "fixed",
  "left-0",
  "bottom-0",
  "w-72",
  "bg-darkGrayBlackBlue",
  "z-50",
];

// #footer .copyright {
//   text-align: center;
// }

// #footer .credits {
//   padding-top: 5px;
//   text-align: center;
//   font-size: 13px;
//   color: #eaebf0;
// }

// @media (max-width: 1199px) {
//   #footer {
//     position: static;
//     width: auto;
//     padding-right: 20px 15px;
//   }
// }

export default function Footer() {
  return (
    <footer className={footerTailwind.join(" ")}>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>iPortfolio</span>
          </strong>
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
