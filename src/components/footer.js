import React from 'react'
import './footer.scss'
const footer = () => {
    const d = new Date();
    return (
        <footer className="site-footer">
            <span>Copyright © {d.getFullYear()} Gopak Ltd. All rights reserved.</span>
        </footer>
    )
}

export default footer
