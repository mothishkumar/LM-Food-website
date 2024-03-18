import "./home.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="best-deals">
        <h1 className="best-deals-header">Are you Ready to Order with the deals?</h1>
        <button className="best-deals-orderbtn">Proced to order</button>
      </div>
      <div className="wrapper">
        <div className="footer-wrapper">
          <div className="footer-contents">
            <div className="footer-company">
              <h3 className="header">Company</h3>
              <ul className="list">
                <li>About us</li>
                <li>team</li>
                <li>carrers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3 className="header">Contact</h3>
              <ul className="list">
                <li>About us</li>
                <li>team</li>
                <li>carrers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-legal">
              <h3 className="header">Legal</h3>
              <ul className="list">
                <li>About us</li>
                <li>team</li>
                <li>carrers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h4>Follow us</h4>
          </div>
        </div>
        <hr />
        <div className="footer-rights">
          <h1 className="footer-right">All Rights Revised @ LM Foods</h1>
          <h1 className="footer-made">Made by Mothish</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer;
