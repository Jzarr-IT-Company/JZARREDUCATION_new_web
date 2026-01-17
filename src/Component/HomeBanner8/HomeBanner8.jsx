import React from 'react';
import { faFacebookF, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css';
import HomeBanner8SocialMedia from '../HomeBanner8SocialMedia/HomeBanner8SocialMedia';
import SocialLink from '../SocialLink/SocialLink';

const HomeBanner8 = () => {
    return (
        <>
            <div className="social-links mt-5 d-none d-md-flex">
                <SocialLink
                    href="https://www.facebook.com/jzarriteducation/"
                    icon={faFacebookF}
                    iconColor="#1877F2"
                />
                <SocialLink
                    href="https://www.instagram.com/jzarri.teducation/?fbclid=IwZXh0bgNhZW0CMTEAAR3_OVsGWPIbZR3mcGXx6sIoBfb4hi1cqiq8maK4Cum3svMOkJ-mGaH1c3c_aem_5w6Ru_c-gbpXZ9N_rka6RQ"
                    icon={faInstagram}
                    className="instagram-gradient"
                />
                <SocialLink
                    href="https://youtube.com/@waseemjakhrani1?si=ig6kFjKsu-QVYclq"
                    icon={faYoutube}
                    className="youtube-color"
                />
                <SocialLink
                    href="https://www.linkedin.com/company/jzarritcompany/"
                    icon={faLinkedin}
                    iconColor="#0077B5"
                />
                <SocialLink
                    href="#"
                    icon={faTiktok}
                />
            </div>
            <HomeBanner8SocialMedia />
        </>
    );
};

export default HomeBanner8;
