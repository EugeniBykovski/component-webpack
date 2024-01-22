import Navbar from "../Navbar/Navbar";

function Footer() {
  return `
      <footer class="footer">
        ${Navbar(["Home", "Features", "Pricing"])}
      </footer>
    `;
}

export default Footer;
