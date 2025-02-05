import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex flex-col justify-start mr-10">
                <img src={logo} alt="logo" className="w-[266px] h-[72.14px] object-contain" />
                <p className={`${styles.paragraph} max-w-[312px] mt-4 sm:ml-6 ml-0`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink, index) => (
                    <div key={index} className="flex flex-1 flex-col sm:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerLink.title}
                        </h4>

                        <ul className="mt-6">
                            {footerLink.links.map((linkk, index) => (
                                <li
                                    key={linkk.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                        index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                                    }`}>
                                    <a href={linkk.link}>{linkk.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full border-t-[1px] border-[#3f3e45] flex justify-between items-center md:flex-row flex-col pt-6">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright <span className="ml-2 mr-2">Ⓒ </span> 022 HooBank. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((media, index) => (
                    <img
                        src={media.icon}
                        alt="icon"
                        className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
                        onClick={() => window.open(media.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
