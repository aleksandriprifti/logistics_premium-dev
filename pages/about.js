import Layout from '@/components/layout/Layout';
import Brand1Slider from '@/components/slider/Brand1Slider';
import News2Slider from '@/components/slider/News2Slider';
import Testimonial2Slider from '@/components/slider/Testimonial2Slider';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useTranslation } from 'react-i18next';

export default function About() {
  const [isOpen, setOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <>
      <Layout>
        <section className="section">
          <div className="container">
            <div className="box-pageheader-1 text-center">
              <h2 className="color-brand-1 mt-15 wow animate__animated animate__fadeIn mb-10">
                {i18n.t('about-us')}
              </h2>
              <p className="font-md color-white wow animate__animated animate__fadeIn">
                {i18n.t('about-us-desc')}
              </p>
              {/* <p className="font-md color-white wow animate__animated animate__fadeIn">
                Premium Logistics is a leading shipping company based in
                Albania, specializing in global shipping services.{" "}
                <br className="d-none d-lg-block" /> With years of experience in
                the industry, we have built a reputation for excellence,
                reliability, and customer satisfaction.
                <br className="d-none d-lg-block" />
                Our dedicated team is committed to providing seamless shipping
                solutions tailored to meet the unique needs of our clients.
                <br className="d-none d-lg-block" /> At Premium Logistics, we
                prioritize efficiency, safety, and customer service, ensuring
                that your shipments arrive on time, every time.
              </p> */}
            </div>
          </div>
        </section>
        <section className="section mt-100 mb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <h2 className="color-brand-2 mb-25 wow animate__animated animate__fadeIn">
                  {i18n.t(
                    'simplifying-complex-shipping-challenges-with-innovative-solutions'
                  )}
                </h2>
                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                  {i18n.t('premium-logistics-text')}
                </p>
                <div className="box-button mt-40">
                  <Link
                    className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeIn mr-40"
                    href="/request-a-quote"
                  >
                    {i18n.t('calculate-package')}
                  </Link>
                  <a
                    className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeIn"
                    onClick={() => setOpen(true)}
                  >
                    <img
                      src="/assets/imgs/template/icons/play.svg"
                      alt="transp"
                    />
                  </a>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="MMyZ9Pu01RI"
                  onClose={() => setOpen(false)}
                />
              </div>
              <div className="col-lg-6 position-relative mb-30">
                <div className="row align-items-end">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img
                      className="wow animate__animated animate__fadeIn mb-20"
                      src="/assets/imgs/page/about/img-about-1-1.png"
                      alt="transp"
                    />
                    <img
                      className="wow animate__animated animate__fadeIn"
                      src="/assets/imgs/page/about/img-about-1-2.png"
                      alt="transp"
                    />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <img
                      className="wow animate__animated animate__fadeIn"
                      src="/assets/imgs/page/about/img-about-1-3.png"
                      alt="transp"
                    />
                  </div>
                </div>
                <div className="quote-center shape-2" />
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-50 mb-50">
          <div className="container">
            <div className="row align-items-center item-about-2">
              <div className="col-lg-6">
                <img
                  className="wow animate__animated animate__fadeIn"
                  src="/assets/imgs/page/about/img-about-2-1.png"
                  alt="transp"
                />
              </div>
              <div className="col-lg-6">
                <div className="box-info-aabout-2">
                  <h2 className="color-brand-2 mt-15 mb-25 wow animate__animated animate__fadeIn">
                    {i18n.t('globally-connected-large-network')}
                  </h2>
                  <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                    {i18n.t('premium-logistics-mission')}
                  </p>
                  <div className="box-button mt-40">
                    <div className="row">
                      <div className="col-lg-6 mb-30">
                        <h6 className="color-brand-1 chart-title font-md-bold  wow animate__animated animate__fadeIn">
                          {i18n.t('affordable-cost')}
                        </h6>
                        {/* <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                          {i18n.t('affordable-cost-description')}
                        </p> */}
                      </div>
                      <div className="col-lg-6 mb-30">
                        <h6 className="feature-title font-md-bold color-brand-1 wow animate__animated animate__fadeIn">
                          {i18n.t('short-time-delivery')}
                        </h6>
                        {/* <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                          {i18n.t('short-time-delivery-description')}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center item-about-2 item-about-2-revert">
              <div className="col-lg-6">
                <div className="box-info-aabout-2">
                  <h2 className="color-brand-2 mt-15 mb-25 wow animate__animated animate__fadeIn">
                    {i18n.t('established-strong-relationships')}
                  </h2>
                  <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                    {i18n.t('premium-logistics-founding')}
                  </p>
                  <div className="box-button mt-40">
                    <Link
                      className="btn btn-brand-2 wow animate__animated animate__fadeIn mr-20"
                      href="/contact"
                    >
                      {i18n.t('contact-us')}
                    </Link>
                    {/* <Link
                      className="btn btn-link-medium wow animate__animated animate__fadeIn"
                      href="#"
                    >
                      {i18n.t('learn-more')}
                      <svg
                        className="icon-16 ml-5 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="wow animate__animated animate__fadeIn"
                  src="/assets/imgs/page/about/img-about-2-2.png"
                  alt="transp"
                />
              </div>
            </div>
            {/* <div className="row align-items-center item-about-2">
              <div className="col-lg-6">
                <img
                  className="wow animate__animated animate__fadeIn"
                  src="/assets/imgs/page/about/img-about-2-3.png"
                  alt="transp"
                />
              </div>
              <div className="col-lg-6">
                <div className="box-info-aabout-2">
                  <span className="btn btn-tag wow animate__animated animate__fadeIn">
                    Our Partners
                  </span>
                  <h2 className="color-brand-2 mt-15 mb-25 wow animate__animated animate__fadeIn">
                    {i18n.t('established-strong-relationships')}
                  </h2>
                  <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                    {i18n.t('premium-logistics-pioneers')}
                  </p>
                  <div className="box-button d-flex mt-40">
                    <Link
                      className="hover-up wow animate__animated animate__fadeIn mr-10"
                      href="#"
                    >
                      <img
                        src="/assets/imgs/template/appstore-btn.png"
                        alt="transp"
                      />
                    </Link>
                    <Link
                      className="hover-up wow animate__animated animate__fadeIn"
                      href="#"
                    >
                      <img
                        src="/assets/imgs/template/google-play-btn.png"
                        alt="transp"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <span className="btn btn-tag wow animate__animated animate__fadeIn">
                  Get in touch
                </span> */}
                <h3 className="color-grey-900 mt-15 wow animate__animated animate__fadeIn mb-20">
                  {i18n.t('proud-deliver-excellence')}
                  <br className="d-none d-lg-block" />
                  {i18n.t('proud-deliver-excellence_1')}
                </h3>
                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-40">
                  {i18n.t('premium-logistics-commitment')}
                </p>
                <div className="row">
                  <div className="col-lg-6 mb-30">
                    <h3 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                      {i18n.t('boost-your-sale')}
                    </h3>
                    {/* <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                      {i18n.t('boost-your-sale-description')}
                    </p> */}
                  </div>
                  <div className="col-lg-6 mb-30">
                    <h3 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                      {i18n.t('introducing-new-features')}
                    </h3>
                    {/* <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                      {i18n.t('introducing-new-features-description')}
                    </p> */}
                  </div>
                </div>
                {/* <div className="mt-20">
                  <Link
                    className="btn btn-brand-2 wow animate__animated animate__fadeIn mr-20"
                    href="/contact"
                  >
                    {i18n.t('contact-us')}
                  </Link>
                  <Link
                    className="btn btn-link-medium wow animate__animated animate__fadeIn"
                    href="#"
                  >
                    {i18n.t('learn-more')}
                    <svg
                      className="icon-16 ml-5 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="box-image-touch box-image-info-2-2" />
        </section>
        <section className="section pt-110 pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className=" wow animate__animated animate__fadeIn mb-20">
                  {i18n.t('meet-our-team')}
                </h2>
                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                  {i18n.t('premium-logistics-welcome')}
                  {/* <br className="d-none d-lg-block" /> */}
                  {i18n.t('premium-logistics-welcome_1')}
                </p>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {' '}
                    <img
                      src="/assets/imgs/page/homepage2/team1.png"
                      alt="transp"
                    />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {' '}
                    <img
                      src="/assets/imgs/page/homepage2/team2.png"
                      alt="transp"
                    />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Lori Stevens</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {' '}
                    <img
                      src="/assets/imgs/page/homepage2/team3.png"
                      alt="transp"
                    />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {' '}
                    <img
                      src="/assets/imgs/page/homepage2/team4.png"
                      alt="transp"
                    />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {" "}
                    <img src="/assets/imgs/page/about/team5.png" alt="transp" />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {" "}
                    <img src="/assets/imgs/page/about/team6.png" alt="transp" />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Lori Stevens</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {" "}
                    <img src="/assets/imgs/page/about/team7.png" alt="transp" />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                <div className="cardTeam">
                  <div className="cardImage">
                    {" "}
                    <img src="/assets/imgs/page/about/team8.png" alt="transp" />
                  </div>
                  <div className="cardInfo">
                    <h6 className="color-brand-2">Devon Lane</h6>
                    <div className="info-bottom">
                      <p className="color-grey-500">Founder / CEO</p>
                      <p className="color-grey-500">
                        <Link href="#">
                          <svg
                            className="bi bi-twitter"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="#818692"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                        <Link href="#">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                              fill="none"
                            />
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <div className="section bg-2 pt-65 pb-35">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 mb-30 text-lg-start wow animate__animated animate__fadeIn text-center">
                <p className="font-2xl-bold color-brand-2">
                  We are<span className="color-brand-1"> trusted</span> by major
                  global brands
                </p>
              </div>
              <div className="col-lg-9 mb-30">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-6 pb-0">
                    <Brand1Slider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-50" />
        {/* <section className="section mt-50">
           <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8">
                <h2 className=" color-brand-2 mb-20 title-padding-left wow animate__animated animate__fadeIn">
                  Testimonials
                </h2>
                <p className="font-lg color-brand-2 pl-55 wow animate__animated animate__fadeIn">
                  Hear from our users who have saved thousands on their
                  <br className="d-none d-lg-block" />
                  Startup and SaaS solution spend.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-end">
                <div className="box-button-sliders">
                  <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-customers wow animate__animated animate__fadeIn">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-customers wow animate__animated animate__fadeIn">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-slide-customers overflow-hidden mt-50">
            <div className="box-slide-customers-2 container">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-4-customers pb-50">
                  <Testimonial2Slider />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section pt-70 pb-70 bg-get-quote">
          <div className="container">
            <div className="box-get-quote">
              <div className="get-quote-left">
                <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">
                  Have any ideas in your mind?
                </p>
                <h2 className="color-brand-1 wow animate__animated animate__fadeIn">
                  Create your next Project with Us
                </h2>
              </div>
              <div className="get-quote-right">
                <Link
                  className="btn btn-get-quote wow animate__animated animate__fadeIn"
                  href="/request-a-quote"
                >
                  <svg
                    className="mr-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <div className="mt-50" />
        {/* <section className="section mt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8">
                <h2 className=" mb-20 wow animate__animated animate__fadeIn">
                  Our Blog &amp; Insights
                </h2>
                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                  The latest information about shipping services and our
                  promotions
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-end">
                <div className="box-button-sliders">
                  <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-customers wow animate__animated animate__fadeIn">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-customers wow animate__animated animate__fadeIn">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-3-customers pb-50">
                  <News2Slider />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className="section bg-map d-block">
          <div className="container">
            <div className="box-newsletter">
              <h3 className="color-brand-2 wow animate__animated animate__fadeIn mb-20">
                {i18n.t('get-in-touch')}
              </h3>
              <div className="row">
                <div className="col-lg-5 mb-30">
                  <div className="form-newsletter wow animate__animated animate__fadeIn">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder={i18n.t('full-name') + ' *'}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder={i18n.t('email-address') + ' *'}
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Weight"
                            />
                          </div>
                        </div> */}
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Height"
                            />
                          </div>
                        </div> */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Message / Note"
                              rows={5}
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            className="btn btn-brand-1-big"
                            type="submit"
                            defaultValue={i18n.t('submit')}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 mb-30">
                  <div className="d-flex box-newsletter-right">
                    <div className="box-map-2 wow animate__animated animate__fadeIn">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.1262227066395!2d19.810948875574233!3d41.314125900537036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031aaacadf00f%3A0xebaebb708a954f13!2sPremium%20Logistics!5e1!3m2!1sen!2s!4v1725804417356!5m2!1sen!2s"
                        height={242}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <ul className="list-info-footer">
                      <li className="wow animate__animated animate__fadeIn">
                        <div className="cardImage">
                          <span className="icon-brand-1">
                            <img
                              src="/assets/imgs/page/homepage2/address.svg"
                              alt="transp"
                            />
                          </span>
                        </div>
                        <div className="cardInfo">
                          <h6 className="font-sm-bold color-grey-900">
                            {i18n.t('address')}
                          </h6>
                          <p className="font-sm color-grey-900">
                            {i18n.t('address-details')}
                          </p>
                        </div>
                      </li>
                      <li className="wow animate__animated animate__fadeIn">
                        <div className="cardImage">
                          <span className="icon-brand-1">
                            <img
                              src="/assets/imgs/page/homepage2/email.svg"
                              alt="transp"
                            />
                          </span>
                        </div>
                        <div className="cardInfo">
                          <h6 className="font-sm-bold color-grey-900">Email</h6>
                          <p className="font-sm color-grey-900">
                            contact@transp.com
                          </p>
                        </div>
                      </li>
                      <li className="wow animate__animated animate__fadeIn">
                        <div className="cardImage">
                          <span className="icon-brand-1">
                            <img
                              src="/assets/imgs/page/homepage2/phone.svg"
                              alt="transp"
                            />
                          </span>
                        </div>
                        <div className="cardInfo">
                          <h6 className="font-sm-bold color-grey-900">
                            {i18n.t('telephone')}
                          </h6>
                          <p className="font-sm color-grey-900">
                            (+380) 50 318 47 07 - (+182) 50 318 47 07
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
