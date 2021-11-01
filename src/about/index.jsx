import React from "react";
import {Card, Divider, Body1, Fab} from "ui-neumorphism";
import {FaFacebookSquare, FaTelegram} from "react-icons/fa";

const About = () => {
    return (
        <Card
            style={{
                padding: "2.1875em 5%",
            }}>
            <h1>ABOUT US</h1>
            <Divider dense/>
            <Body1>
                မင်္ဂလာပါ။ ရုပ်ရှင်ကြည့်မယ်ဆို ဒီကကြည့်ပါ 🙋🏻‍♂️
            </Body1>
            <Body1>
                👉🏻 "ဒီကကြည့်-D ka kyi Page" အကြောင်း မိတ်ဆက်ပေးပါမယ်ဗျ။
                ဒီကကြည့်-D ka kyi Pageဟာ ကျွန်တော်တို့ ရုပ်ရှင်ကြိုက်နှစ်သက်သူတွေ အပျင်းပြေ ရုပ်ရှင်ကြည့်ရင်း
                တော်လှန်ရေးအတွက်လည်း တစ်ထောင့်တစ်နေရာက အကျိုးပြုနိုင်ဖို့အတွက် ရည်ရွယ်ပါတယ်။
            </Body1>
            <Body1>
                👉🏻 ဒီကကြည့်-D ka kyi page မှာ ဘာတွေတင်သွားမလဲဆိုရင်တော့ -
                မိမိကြိုက်နှစ်သက်တဲ့ ရုပ်ရှင်ကားတွေကို တိုက်ရိုက်ဝင်ရောက်ကြည့်ရှူနိုင်မယ့် Movie links တွေ
                တင်ပေးသွားမှာပါ။
            </Body1>
            <Body1>👉🏻 Link မှတဆင့် ဝင်ရောက်ရုပ်ရှင်ကြည့်ရင်း ရရှိလာမယ့် Fund ငွေအားလုံးကို ကျွန်တော်တို့ ဒီကကြည့်-D ka
                kyi Team က တော်လှန်ရေးအတွက် လိုအပ်မယ့် နေရာအသီးသီးဆီသို့ ထောက်ပံ့ပေးသွားမှာဖြစ်ပါတယ်။</Body1>
            <Body1>👉🏻 အခုတင်ထားပြီးတဲ့ ရုပ်ရှင်တွေကြည့်ချင်ရင်တော့ ဒီ website လေးထဲဝင်ကြည့်လို့ရပါပြီ။</Body1>
            <Body1>👉🏻 ကျွန်တော်တို့မတင်ရသေးလို့ မိမိကြည့်ချင်တဲ့ရုပ်ရှင်တွေရှိရင်လည်း ဒီ <a href={"https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScqieWpOAfJVbsEeavJ7ulJiS2ZLUomPcPWwaiyDBF3PhsnDw%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DIwAR3Dg22-K36QoB7kqsH_Wowool_7TH8165CejImLxUmJnZ30_DVlqrdj0Ts&h=AT0BnWitxXAbjPvIackaxV32YaVCMQCFc9IYU1Exlzvi_kER8pvtlQf3N9a82wNXf8nBFEbpG2uDREpXxQI9Yo4xwAJIocAkGl1V-a9-VIauYkVJAWBR28KKVTQCevEncb1r&__tn__=-UK-R&c[0]=AT0nzalFmAjBWuiIDFn7j1rEUlUYy7lEmmNlxsnJS4TjxLfO8owPCDGEeeP358iI5Q2xatHe4vyxaBRPS0KJVTMbVWmmXD6ia4gtwQxd-GtfZ5ftlwQQiYpmM_7FPpwxJuLve_N2U82YK58CW15uwq6kKte25cwK56n6HtGro1MDwg"}><b>Google Form</b></a> လေးမှာ
                ဝင်ရောက်ဖြည့်စွက်ပြီး တောင်းဆိုနိုင်ပါတယ်ခင်ဗျ။</Body1>
            <Body1>
                အရေးတော်ပုံအောင်ဖို့ ကူပြီး Click ပေးကြပါဉီးဗျ ၊ ကျေးဇူးအများကြီးတင်ပါတယ်။
            </Body1>
            <Body1>
                ❤️WITH LOVE,
                ဒီကကြည့်-D ka kyi team.
            </Body1>
            <div className='row'>
                <div className='col-md-3'/>
                <Fab
                    className='col-sm-12 col-md-3 my-4 d-inline-flex justify-content-center'
                    onClick={openFb}>
                    &nbsp;
                    <FaFacebookSquare/>
                    &nbsp;Facbook&nbsp;
                </Fab>
                <Fab
                    className='col-sm-12 col-md-3 my-4 d-inline-flex justify-content-center'
                    onClick={openTelegram}>
                    &nbsp;
                    <FaTelegram/>
                    &nbsp;Telegram&nbsp;
                </Fab>
                <div className='col-md-3'/>
            </div>
        </Card>
    );
};
const openFb = () => {
    window.open(`https://www.facebook.com/%E1%80%92%E1%80%AE%E1%80%80%E1%80%80%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%B7-D-ka-kyi-106641088490068/`);
};
const openTelegram = () => {
    window.open(`https://t.me/dkakyi`);
};
export default About;
