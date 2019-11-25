import React, {useState, useEffect} from 'react'
//import defaultStyle from './style.css'

import classify from 'src/classify';
import Newsletter from './Newsletter';
import Identify from "src/simi/Helper/Identify";
import {Link} from 'react-router-dom';
import Copyright from './Copyright';
import Facebook from 'src/simi/BaseComponents/Icon/Facebook'
import Twitter from 'src/simi/BaseComponents/Icon/Twitter'
import Instagram from 'src/simi/BaseComponents/Icon/Instagram'
import Expansion from 'src/simi/BaseComponents/Expansion'
require('./footer.scss');
const Footer = props => {
    const {classes} = props;
    const [isPhone, setIsPhone] = useState(window.innerWidth < 1024);
    const $ = window.$;
    const [expanded, setExpanded] = useState(null);
    const pagec1 = 1;
    const pagep2 = 2;
    const pageCustomerServices = [
        {
            id: 1,
            link: "#",
            title: "About"
        },
        {
            id: 2,
            link: "#",
            title: "Delivery & returns"
        },
        {
            id: 3,
            link: "#",
            title: "Trade services"
        },
        {
            id: 4,
            link: "#",
            title: "Branch Finder"
        },
        {
            id: 5,
            link: "/contact.html",
            title: "Contact us"
        }
    ];

    const pagePolicies = [
        {
            id: 1,
            link: "#",
            title: "Terms & Conditions of supply"
        },
        {
            id: 2,
            link: "#",
            title: "Terms of use"
        },
        {
            id: 3,
            link: "#",
            title: "Privacy & cookie policy"
        }
    ];
    
    const helpPages = [
        {
            id: 1,
            link: "#",
            title: "Contact us"
        },
        {
            id: 2,
            link: "#",
            title: "Store Location"
        },
        {
            id: 3,
            link: "#",
            title: "Delivery"
        },
        {
            id: 4,
            link: "#",
            title: "Return"
        }
    ];

    const siteInfoPages = [
        {
            id: 1,
            link: "#",
            title: "Terms & Conditions"
        },
        {
            id: 2,
            link: "#",
            title: "Privacy Policy"
        },
        {
            id: 3,
            link: "#",
            title: "Cookie Policy"
        },
        {
            id: 4,
            link: "#",
            title: "Contact us"
        }
    ];

    const companyPages = [
        {
            id: 1,
            link: "#",
            title: "Careers"
        },
        {
            id: 2,
            link: "#",
            title: "Licensing"
        },
        {
            id: 3,
            link: "#",
            title: "Affiliates"
        },
        {
            id: 4,
            link: "#",
            title: "Investor Relations"
        }
    ];

    const contactPages = [
        {
            id: 1,
            link: "#",
            title: "Careers"
        },
        {
            id: 2,
            link: "#",
            title: "Licensing"
        },
        {
            id: 3,
            link: "#",
            title: "Affiliates"
        },
        {
            id: 4,
            link: "#",
            title: "Investor Relations"
        }
    ];
    const listPages = pages => {
      
        let result = null;
        if(pages.length > 0) {
            result = pages.map((page, index) => {
                return (
                    <li key={index}>
                        <Link to={page.link}>{page.title}</Link>
                    </li>
                );
            })
        }

        return <ul>{result}</ul>;
    }

    const resizePhone = () => {
        $(window).resize(function() {
            const width = window.innerWidth;
            const newIsPhone = width < 1024
            if(isPhone !== newIsPhone){
                setIsPhone(newIsPhone)
            }
        })
    }

    const handleExpand = (expanded) => {
        setExpanded(expanded);
    }

    useEffect(() => {
        resizePhone();
    })

    return (
        <div className={'footer-app'}>
          
             <Newsletter classes={classes}/> 
             <hr className={'hrClass'}/>
            <div className={'footer-middle'}>
                <div className={'container col-mobile-pd-0'}>
                    <div className={`row app--flex`}>
                        <div className={`col-custom-20pr col-mobile-pd-0`}>
                            {!isPhone ? <React.Fragment>
                                <span className={'footer--custom_title'}>
                                {Identify.__("Help")}
                            </span>
                            {listPages(helpPages)}
                            </React.Fragment>: <Expansion id={pagec1} title={Identify.__("Help")} content={listPages(helpPages)} icon_color="#FFFFFF"  handleExpand={(pagec1) => handleExpand(pagec1)} expanded={expanded} />}
                        </div>
                        <div className={`col-custom-20pr col-mobile-pd-0`}>
                        {!isPhone ? <React.Fragment>
                            <span className={'footer--custom_title'}>
                            {Identify.__("Site Info")}
                        </span>
                        {listPages(siteInfoPages)}
                            </React.Fragment>: <Expansion id={pagep2} title={Identify.__("Site Info")} content={listPages(siteInfoPages)} icon_color="#FFFFFF" handleExpand={(pagep2) => handleExpand(pagep2)} expanded={expanded} />}
                        </div>
                        <div className={`col-custom-20pr col-mobile-pd-0`}>
                        {!isPhone ? <React.Fragment>
                            <span className={'footer--custom_title'}>
                            {Identify.__("Company")}
                        </span>
                        {listPages(companyPages)}
                            </React.Fragment>: <Expansion id={pagep2} title={Identify.__("Company")} content={listPages(companyPages)} icon_color="#FFFFFF" handleExpand={(pagep2) => handleExpand(pagep2)} expanded={expanded} />}
                        </div>
                        {/* <div className={`col-custom-20pr hidden-xs`} /> */}
                        <div className={`col-custom-20pr hidden-xs`} />
                        <div className={`col-custom-20pr text-right`}>
                            <span className={'footer--custom_title'}>
                                {Identify.__("Contact")}
                            </span>
                            <ul className={'list-contact'}>
                                <li>
                                    <a href={`tel:842466517968`}>+88 089 090 000</a>
                                </li>
                                <li>
                                    <a href={`mailto:Support@simicart.com `}>simicart@gmail.com</a>
                                </li>
                            </ul>
                            {/* <span
                                className={'footer--custom_title'}
                                style={{
                                    display: "block",
                                    marginTop: "40px"
                                }}
                            >
                                {Identify.__("Connect")}
                            </span> */}
                            <div className={'social__md-block'}>
                                <a href='https://www.facebook.com/simicart' target="__blank">
                                    <Facebook className={'facebook-icon'} style={{width: "50px", height: "50px"}} />
                                </a>
                                <a href='https://twitter.com/SimiCart' target="__blank">
                                    <Twitter className={'twitter-icon'} style={{width: "50px", height: "50px"}} />
                                </a>
                                <a href='https://www.instagram.com/simicart.official/' target="__blank">
                                    <Instagram className={'instagram-icon'} style={{width: "50px", height: "50px"}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <Copyright isPhone={isPhone} classes={classes}/> */}
        </div>
    )
}
export default Footer   