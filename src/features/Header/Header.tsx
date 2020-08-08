import * as React from 'react';
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

import ecletikaPreview from '../../public/video/eclectika-preview.mp4';
import './Header.scss';

export const Header = (): React.ReactElement => {
  const [state, setState] = React.useState({
    collapse: false,
    isWideEnough: false,
  });

  return (
    <header>
      <MDBNavbar
        color="bg-dark"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarBrand href="/">
          <strong>Nevskiy guide</strong>
        </MDBNavbarBrand>
        {!state.isWideEnough && (
          <MDBNavbarToggler
            onClick={() => setState({ ...state, collapse: !state.collapse })}
          />
        )}
        <MDBCollapse isOpen={state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

      <section className="view">
        <video
          // poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
          playsInline
          autoPlay
          muted
          loop
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src={ecletikaPreview} type="video/mp4" />
        </video>
        <div className="full-bg-img flex-center mask rgba-indigo-light white-text">
          <ul className="animated fadeInUp col-md-12 list-unstyled list-inline">
            <li>
              <h1 className="font-weight-bold">
                Discover St. Petersburg with Nevsky guide
              </h1>
            </li>
            <li>
              <p className="py-4">
                The sheer grandeur and history of Russia's imperial capital never fail to amaze
              </p>
            </li>
            <li className="list-inline-item">
              <a
                target="_blank"
                href="https://mdbootstrap.com/getting-started/"
                className="btn btn-unique btn-lg btn-rounded mr-0 waves-effect waves-light"
              >
                View tours
              </a>
            </li>
            <li className="list-inline-item">
              <a
                target="_blank"
                href="https://mdbootstrap.com/material-design-for-bootstrap/"
                className="btn btn-cyan btn-lg btn-rounded ml-0 waves-effect waves-light"
              >
                Charter a Motorcoach
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};
