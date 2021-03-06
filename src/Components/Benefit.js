import React from 'react'

export default function Benefit() {
  return (
    <div><section className="features">
    <div className="row">
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-webpage"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>HTML | CSS</li>
                        <li>JavaScript | React</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-share"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>NodeJS | Express</li>
                        <li>PHP | Laravel</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-server2"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-cloud"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</section></div>
  )
}
