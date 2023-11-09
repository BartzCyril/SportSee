import {Link} from "react-router-dom";

type FooterNavItemProps = {
    link : string,
    srcImg : string,
    altImg : string
}

export function FooterNavItem({link, srcImg, altImg} : FooterNavItemProps) {
    return (
        <div className="footerNavItem">
            <Link to={link}>
                <img src={`/SportSee/img/${srcImg}`} alt={altImg}/>
            </Link>
        </div>
    )
}

