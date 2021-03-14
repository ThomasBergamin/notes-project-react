import React from 'react';

function Footer(){

    let today = new Date();
    let currentYear = today.getFullYear()

    return <footer><p>Copyright Thomas Bergamin © {currentYear}</p></footer>
}

export default Footer;