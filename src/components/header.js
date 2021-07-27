import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './header.scss'

// import PropTypes from "prop-types"
import { Link } from "gatsby"


const header = () => {
  return (
    <header className="site-header">
      <div className="site-header-logo">
        <StaticImage
          src="../images/gopak-logo.png"
          width={199}
          quality={37}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Gopak"
        />
      </div>
      <nav>
        <ul>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
          <li><Link to="/login"><i className="fas fa-user"></i>Sign In</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
