import React from 'react';
import Logo from './template-logo.png';

const SiteHeader = ({ stateText, departmentText }) => {
  return (
    <div className="section-default">
      <div className="branding">
        <div className="header-organization-banner">
          <a href="/">
            <div className="logo-assets">
              <img src={Logo} className="logo-img" alt="State Template Logo" />
              <div className="logo-text">
                <span className="logo-state">{stateText}</span>
                <span className="logo-dept">{departmentText}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader