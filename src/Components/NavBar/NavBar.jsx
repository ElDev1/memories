/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container-nav">
      <nav>
        <img
          src="https://s3-alpha-sig.figma.com/img/9e15/dd50/ce015638380457fdf74a147d1e823c68?Expires=1664755200&Signature=NNp6YbyjPHicFtHGFIBBI3VeYsozMgK9CqxvHcr0BqNpOaSmzhQxF4yRY1kYTc9bbfwP1fL0ed4hLh9hTphRMluvm5sokqtW5kv8KwmFeFOcukTS7E5wi1~5TuDJEbVMZovYkfsDBA2VaZgcmIXraZEqqLCYRxS8A6ycLwGt9OkNPODXVucn~mjuuKu-szJJBbdTz7J02jG-lRoDaf9sdtPhYeLlJxfP-VAgpRfGroqNIaRQSbHyRXH8imuO0zQnJQ77bdPg5vCPmEfCrHbtI0QMkQgxrknwjEcJWlduMrjqxnBPIRCn9RdpSRMjLCLo5pO7cp~zDi16nTlHR9yY0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
          className="logo-image"
        />
        <div className="nav-paths">
          <a href="#">World Memories</a>
          <a href="#">My Memories</a>
          <a href="#">Create Memory</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
