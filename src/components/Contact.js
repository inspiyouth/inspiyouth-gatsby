import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                        ></textarea>
                    </div>
                    <ul className="actions">
                        <li>
                            <input
                                type="submit"
                                value="Send Message"
                                className="special"
                            />
                        </li>
                        <li>
                            <input type="reset" value="Clear" />
                        </li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:halo@inspiyouth.id">
                            halo@inspiyouth.id
                        </a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-whatsapp"></span>
                        <h3>Telepon & WhatsApp</h3>
                        <a href="https://api.whatsapp.com/send?phone=+6285879419317">+62 858-7941-9317</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Alamat</h3>
                        <span>
                            Raden Kosasih No. 146 RT 04/01
                            <br />
                            Kel. Gunung Batu, Kec. Bogor Barat
                            <br />
                            Kota Bogor 16118
                            <br />
                            Indonesia
                        </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
