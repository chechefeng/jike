import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div class="footer">
                        <div class="footer__statement">We can’t wait to see what you build.</div>
                        <section class="section -flush ">
                            <div class="container">
                                <div class="footer__section">
                                    <header class="footer__header">Products</header>
                                    <ul class="footer__list">
                                        <li class="footer__list-item">
                                            <a href="/voice-video" class="footer__link">Voice &amp; Video</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/messaging" class="footer__link">Messaging</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/authy" class="footer__link">Authentication</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/wireless" class="footer__link">Connected Devices</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/engagement-cloud" class="footer__link">Engagement Cloud</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__section">
                                    <header class="footer__header">Solutions</header>
                                    <ul class="footer__list">
                                        <li class="footer__list-item">
                                            <a href="/solutions/account-security" class="footer__link">Account Security</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/solutions/text-marketing" class="footer__link">Text Marketing</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/use-cases/collaboration" class="footer__link">Collaboration</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/use-cases/commerce-communications" class="footer__link">Commerce Communications</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/use-cases/contact-center" class="footer__link">Contact Center</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__section">
                                    <header class="footer__header">Docs</header>
                                    <ul class="footer__list">
                                        <li class="footer__list-item">
                                            <a href="/docs/quickstart" class="footer__link">Quickstarts</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/docs/tutorials" class="footer__link">Tutorials</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/docs/api" class="footer__link">API Reference</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/docs/libraries" class="footer__link">Helper Libraries</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="http://status.twilio.com" class="footer__link">API Status</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__section">
                                    <header class="footer__header">Company</header>
                                    <ul class="footer__list">
                                        <li class="footer__list-item">
                                            <a href="/company" class="footer__link">About Twilio</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/what-is-cloud-communications?" class="footer__link">What is Twilio?</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="https://customers.twilio.com" class="footer__link">Customers</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/help" class="footer__link">Get Help</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/help/sales" class="footer__link">Talk to an expert</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/press" class="footer__link">Press &amp; Media</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="https://investors.twilio.com" class="footer__link">Investor Relations</a>
                                        </li>
                                        <li class="footer__list-item">
                                            <a href="/company/jobs" class="footer__link">Jobs at Twilio</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <footer class="footer__footer">
                            <div class="footer__logo" title="Twilio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11z"></path>
                                    <circle cx="18.7" cy="11.3" r="3.1"></circle>
                                    <circle cx="18.7" cy="18.7" r="3.1"></circle>
                                    <circle cx="11.3" cy="18.7" r="3.1"></circle>
                                    <circle cx="11.3" cy="11.3" r="3.1"></circle>
                                </svg>
                            </div>
                            <ul class="legal__list">
                                <li class="legal__list-item">
                                    <a href="/legal" class="legal__link">Legal</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="/legal/privacy" class="legal__link">Privacy</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="http://twilio.org" class="legal__link">Twilio.org</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="/press" class="legal__link">Press &amp; Media</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="https://signal.twilio.com" class="legal__link">SIGNAL</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="https://investors.twilio.com" class="legal__link">Investors</a>
                                </li>
                                <li class="legal__list-item">
                                    <a href="/company/jobs" class="legal__link">Jobs</a>
                                </li>
                            </ul>
                            <ul class="footer__copyright legal__list">
                                <li class="legal__list-item">Copyright © 2018 Twilio, Inc. <br/>All RightsReserved.</li>
                            </ul>
                        </footer>
                    </div>            
                </Col>
            </Row>
        )
    } 
}

export default Footer;