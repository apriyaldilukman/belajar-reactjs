import React from "react";
import * as AiIcons from "react-icons/ai";
import "./FooterComp.css";

const FooterComp = () => {
    return (

        <div className="footer">
        <div className="container">
        <div className="row">
        <div className="col">
            <h4>Alamat</h4>
            <ul className="link-unstyled link">
            <li>Jalan Putra Bangsa</li>
            <li>Warungboto, Umbulharjo</li>
            <li>Kota Yogyakarta</li>
            </ul>
        </div>
        <div className="col">
            <h4>Client</h4>
            <ul className="link-unstyled">
                <li className="link">BTPN</li>
                <li className="link">Octo Mobile</li>
                <li className="link">Octo Clicks</li>
            </ul>
        </div>
        <div className="col">
            <h4>Social Media</h4>
            <ul className="link-unstyled">
            <li className="link">
                <AiIcons.AiOutlineFacebook />Facebook
            </li>
            <li className="link">
                <AiIcons.AiOutlineInstagram />Instagram
            </li>
            <li className="link">
                <AiIcons.AiOutlineLinkedin />Linkedin
            </li>
            </ul>
        </div>
        </div>
        <hr />
        <div className="row">
            <p className="paragraph">
                &copy;{new Date().getFullYear()} apriyaldilukman || All Right Reserved
            </p>
        </div>
    </div>
</div>
    );
};

export default FooterComp;