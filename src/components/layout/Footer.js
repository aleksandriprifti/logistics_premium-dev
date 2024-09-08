import Link from 'next/link';
import React, { useRef } from 'react';

export default function Footer1({}) {
  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 width-23 mb-30">
                <div className="mb-20">
                  <h5 className="color-brand-1 mb-10">Premium Logistics</h5>
                </div>
                <p className="font-xs color-white mb-20">
                  [We fuse our global network with our depth of expertise in air
                  freight, ocean freight, railway transportation, trucking, and
                  multimode transportation, also we are providing sourcing,
                  warehousing, E-commercial fulfillment, and value-added service
                  to our customers including kitting, assembly, customized
                  package and business inserts, etc.]
                </p>
                <h6 className="color-brand-1">Follow Us</h6>
                <div className="mt-15">
                  <Link className="icon-socials icon-facebook" href="#" />
                  <Link className="icon-socials icon-instagram" href="#" />
                  <Link className="icon-socials icon-twitter" href="#" />
                  <Link className="icon-socials icon-youtube" href="#" />
                  <Link className="icon-socials icon-skype" href="#" />
                </div>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="color-brand-1 mb-10">Company</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="/about">Mission &amp; Vision</Link>
                  </li>
                  <li>
                    <Link href="/our-team">Our Team</Link>
                  </li>

                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 width-16 mb-30">
                <h5 className="color-brand-1 mb-10">Industries</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Global coverage</Link>
                  </li>
                  <li>
                    <Link href="#">Distribution</Link>
                  </li>
                  <li>
                    <Link href="#">Accounting Tools</Link>
                  </li>
                  <li>
                    <Link href="#">Freight Recovery</Link>
                  </li>
                  <li>
                    <Link href="#">Supply Chain</Link>
                  </li>
                  <li>
                    <Link href="#">Warehousing</Link>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="color-brand-1 mb-10">Services</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Sea Transportation</Link>
                  </li>

                  <li>
                    <Link href="#">Inland Transport</Link>
                  </li>
                  <li>
                    <Link href="#">Warehousing & Distribution</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 width-20 mb-30">
                                <h5 className="mb-10 color-brand-1">Gallery</h5>
                                <div className="galleries-footer">
                                    <ul className="list-imgs">
                                        <li> <img src="/assets/imgs/page/homepage1/gal1.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal2.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal3.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal4.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal5.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal6.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal7.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal8.png" alt="transp" /></li>
                                        <li> <img src="/assets/imgs/page/homepage1/gal9.png" alt="transp" /></li>
                                    </ul>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="container">
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 text-lg-start text-center">
                  <span className="color-grey-300 font-md">
                    ©Premium Logistics {new Date().getFullYear()}. All right
                    reversed.
                  </span>
                </div>
                {/* <div className="col-lg-6 col-md-12 text-center text-lg-end">
                  <ul className="menu-bottom">
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Cookies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Terms of service
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
