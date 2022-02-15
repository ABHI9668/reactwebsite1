import React from 'react';
import ReactDom from 'react-dom';
import Card from "./App.jsx";
import "./index.css";

ReactDom.render(
<>
<h1 className="title">Netflix and Amazon Series Name</h1>
<Card  imgsrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/mirzapur_thumb.jpeg?FDKkc_RBidQNSMawskkTHeTlDIVsNZQt" sname="Mirzapur" rating="8.5/10 · IMDb"/>
<Card imgsrc="https://www.breezemasti.com/wp-content/uploads/Bhaukaal-2-Web-Series-Cast-Release-Date-Actor-Actress-Story-Wiki.jpg" sname="Bhaukal" rating="8/10 · IMDb"/>
<Card imgsrc="https://i0.wp.com/feminisminindia.com/wp-content/uploads/2018/07/sacred-games-season-2-netflix.jpg?fit=1280%2C720&ssl=1" sname="Sacred Games" rating="9.1/10 · IMDb"/>
<Card imgsrc="https://filmdaily.co/wp-content/uploads/2020/06/moneyheist-lede-5-1300x650.jpg" sname="Money Heist" rating="9/10 · IMDb"/>
<Card imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/stranger-things-hogwarts-houses.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" sname="Stranger Things" rating="8.7/10 · IMDb"/>

<Card imgsrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/qc_12.jpeg?.Pyl3OuYjfGDzyEqSOXmK38YKttjbT3s&size=770:433" sname="DARK" rating="8.8/10 · IMDb"/>


</>,document.getElementById("root")

);