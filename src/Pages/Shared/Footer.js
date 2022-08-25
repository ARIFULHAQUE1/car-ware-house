import React from 'react';

const Footer = () => {
  const today = new Date();
  const year= today .getFullYear();
  return (
    <div>
      <footer class="footer p-10 bg-gradient-to-r from-secondary to-accent text-accent-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <p >Copyright ©{year} - All right reserved by NEXT GEAR Industries Ltd</p>
      </footer>
      <div>
   
  </div>
    </div>
  );
};

export default Footer;