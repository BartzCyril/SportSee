import {FooterNavItem} from "./FooterNavItem";

const items = [
    {
        link: "/SportSee/",
        srcImg: "yoga.svg",
        altImg: "yoga"
    },
    {
        link: "/SportSee/",
        srcImg: "swim.svg",
        altImg: "swim"
    },
    {
        link: "/SportSee/",
        srcImg: "bike.svg",
        altImg: "bike"
    },
    {
        link: "/SportSee/",
        srcImg: "bodybuilding.svg",
        altImg: "bodybuilding"
    }
]

export function Footer() {
    return (
        <footer>
            <nav>
                {items.map((item, i) => <FooterNavItem link={item.link} srcImg={item.srcImg} altImg={item.altImg} key={`item-footer-${i}`}/>)}
            </nav>
            <p>Copyright, SportSee {new Date().getFullYear()}</p>
        </footer>
    )
}