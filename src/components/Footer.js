import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner align-center">
            <ul className="icons">
                <li><a href="https://www.facebook.com/inspiyouth.id/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/inspiyouth.id/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.youtube.com/channel/UCH8EQBAe2uA5ObgA3_lCcsg" className="icon alt fa-youtube-play"><span className="label">Youtube</span></a></li>
                <li><a href="https://www.github.com/inspiyouth/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/company/inspiyouth/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>Made with <i className="icon fa fa-heart pulse"></i> by <a href="https://github.com/nephertz" target="_blank">nephertz</a></li>
                <li>&copy; 2020 InspiYouth</li>
                <li>Gatsby Forty, designed by <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
