import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Services1() {
  const { i18n } = useTranslation();
  return (
    <>
      <section className="section mt-100">
        <div className="container">
          <h2 className="wow animate__animated animate__fadeIn mb-20">
            {i18n.t('what-we-offer')}
          </h2>
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8 mb-30">
              <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                {i18n.t('welcome-to-our-transportation-services-agency')}
              </p>
            </div>
            {/* <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start">
              <Link
                className="btn btn-brand-1 hover-up"
                href="/request-a-quote"
              >
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
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  ></path>
                </svg>
                Get a quote
              </Link>
            </div> */}
          </div>
          <div className="box-background-offer mt-20">
            <div className="bg-under" />
            <div className="row">
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/shipping.png"
                      alt="transp"
                    />
                  </div>

                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      {i18n.t('sea-forwarding')}
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      {i18n.t('sea-forwarding-description')}
                    </p>
                    <div className="box-button-offer mb-30">
                      {/* <a className="btn btn-link font-sm color-brand-2">
                        View Details
                        <span>
                          <svg
                            className="w-6 h-6 icon-16"
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
                        </span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Air Freight Forwarding</h5>
                                        <p className="font-sm color-grey-900 mb-35">We are professional in ocean freight with
                                            more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div> */}
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/transportation.png"
                      alt="transp"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      {i18n.t('land-transportation')}
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      {i18n.t('land-transportation-description')}
                    </p>
                    <div className="box-button-offer mb-30">
                      {/* <a className="btn btn-link font-sm color-brand-2">
                        View Details
                        <span>
                          <svg
                            className="w-6 h-6 icon-16"
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
                        </span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/distribution.png"
                      alt="transp"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      {i18n.t('warehouse-distribution')} &amp;{' '}
                      {i18n.t('warehouse-distribution_1')}
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      {i18n.t('warehouse-distribution-description')}
                    </p>
                    <div className="box-button-offer mb-30">
                      {/* <a className="btn btn-link font-sm color-brand-2">
                        View Details
                        <span>
                          <svg
                            className="w-6 h-6 icon-16"
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
                        </span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/train.png"
                      alt="transp"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">Railway Logistics</h5>
                    <p className="font-sm color-grey-900 mb-35">
                      We are professional in ocean freight with more than 12
                      years of experience and have shipped more than 100k
                      shipments.
                    </p>
                    <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                        <span>
                          <svg
                            className="w-6 h-6 icon-16"
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/worldwide.png"
                      alt="transp"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">Cross Border</h5>
                    <p className="font-sm color-grey-900 mb-35">
                      We are professional in ocean freight with more than 12
                      years of experience and have shipped more than 100k
                      shipments.
                    </p>
                    <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                        <span>
                          <svg
                            className="w-6 h-6 icon-16"
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
