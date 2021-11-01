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
                <a target='_blank' href='https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScqieWpOAfJVbsEeavJ7ulJiS2ZLUomPcPWwaiyDBF3PhsnDw%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DIwAR2KKfBfV8UqvLePjcrloG8YOQnqrdEzTmlPzDUeHMo_mWp94wXscVmzkoQ&h=AT0BnWitxXAbjPvIackaxV32YaVCMQCFc9IYU1Exlzvi_kER8pvtlQf3N9a82wNXf8nBFEbpG2uDREpXxQI9Yo4xwAJIocAkGl1V-a9-VIauYkVJAWBR28KKVTQCevEncb1r&__tn__=-UK-R&c[0]=AT0nzalFmAjBWuiIDFn7j1rEUlUYy7lEmmNlxsnJS4TjxLfO8owPCDGEeeP358iI5Q2xatHe4vyxaBRPS0KJVTMbVWmmXD6ia4gtwQxd-GtfZ5ftlwQQiYpmM_7FPpwxJuLve_N2U82YK58CW15uwq6kKte25cwK56n6HtGro1MDwg'>
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
