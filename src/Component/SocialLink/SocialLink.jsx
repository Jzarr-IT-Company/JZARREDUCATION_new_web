import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ href, icon, className, iconColor }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`social-icon ${className}`}>
        {icon && <FontAwesomeIcon icon={icon} style={{ color: iconColor }} />}
    </a>
);

export default SocialLink