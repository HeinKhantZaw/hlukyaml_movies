import React from "react";
import "./header.css";
import { Card, Button } from "ui-neumorphism";
const Header = () => {
  return (
    <nav>
      <Card style={{ padding: "12px 0px" }}>
        <div className='menu'>
          <input type='checkbox' id='check' />
          <div className='logo'>
            <a href={`${process.env.PUBLIC_URL}/`}>ဒီကကြည့်-D ka kyi</a>
          </div>
          <ul>
            <label className='btn cancel' htmlFor='check'>
              <i className='fas fa-times'></i>
            </label>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/genres`}>Genres</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/about`}>About</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a rel={"noreferrer"} target={"_blank"} href={"https://docs.google.com/forms/d/e/1FAIpQLScqieWpOAfJVbsEeavJ7ulJiS2ZLUomPcPWwaiyDBF3PhsnDw/viewform"}>
                  Request Movies
                </a>
              </Button>
            </li>
          </ul>
          <label htmlFor='check' className='btn bars'>
            <i className='fas fa-bars'></i>
          </label>
        </div>
      </Card>
    </nav>
  );
};

export default Header;
