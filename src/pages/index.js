import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet
                    title="Home | InspiYouth"
                    meta={[
                        {
                            name: 'description',
                            content:
                                'InspiYouth merupakan komunitas kepemudaan yang bergerak di bidang pengembangan diri, edukasi, dan sosial.',
                        },
                        {
                            name: 'keywords',
                            content:
                                'inspirasi, pemuda, beasiswa, scholarship, sukses',
                        },
                    ]}
                ></Helmet>

                <Banner />

                <div id="main">
                    <section id="program" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>InsFire</h3>
                                <p>
                                    InsFire merupakan informasi edukatif berupa
                                    infografis yang menarik mengenai{' '}
                                    <i>youth development</i> dan{' '}
                                    <i>self development</i>.
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>InSight</h3>
                                <p>
                                    InSight merupakan kegiatan webinar
                                    inspiratif yang mendatangkan para{' '}
                                    <i>speakers</i> berpengalaman dalam berbagai
                                    wawasan.
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>InsCoach</h3>
                                <p>
                                    InsCoach merupakan kegiatan <i>mentoring</i>{' '}
                                    oleh <i>expert</i> dalam menunjang
                                    pengembangan diri.
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>InScholarship</h3>
                                <p>
                                    InScholarship merupakan informasi seputar
                                    beasiswa ter-<i>update</i>.
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>InShare</h3>
                                <p>
                                    InShare merupakan kegiatan sosial masyarakat
                                    (<i>Social Impact, Bootcamp,</i> dan{' '}
                                    <i>Outbond</i>).
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="">
                                <h3>Siapa sih InspiYouth?</h3>
                                <ul className="actions">
                                    <li>
                                        <Link
                                            to="/landing"
                                            className="button next"
                                        >
                                            Tentang Kami
                                        </Link>
                                    </li>
                                </ul>
                            </header>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
