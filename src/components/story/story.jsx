import React from "react";
import ResponsivePlayer2 from '../video/responsive-Player2';
import "../../css/font-awesome.min.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/venobox/venobox.css";
import "../../css/owl.carousel.css";
import "../../css/main.css";
import "../../css/responsive.css";
import { Helmet } from "react-helmet";
import darkLogo from "../../img/logo-dark.png";
import jaredProfile from "../../img/jeremiahProfile.avif";
import marlaProfile from "../../img/liz.jpg";
import partner from '../../img/partner.jpg';
import "./story.css";	
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-218915160-1')
ReactGA.pageview("/story")
class Story extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}
	openModal() {
		this.setState({ isOpen: true })
		console.log(this.state.isOpen)
	}

	closeModal() {
		this.setState({ isOpen: false })
		console.log(this.state.isOpen)
	}
	componentDidMount() {

	}
	
	render() {
const team = [
  {
    name: "Elizabeth Bordtvedt",
    title: "CEO & Founder",
    img: marlaProfile
  },
    {
    name: "Amesh Rihad",
    title: "Co-founder",
    img: partner
  },
  {
    name: "Jeremiah Mora",
    title: "Chief Scientist",
    img: jaredProfile
  },
  // Add more team members here
];
		var jsm = {
			marginLeft: "0%",
			marginTop:"3%"
		}
		
		return (
			<React.Fragment>	
<section className="team-section" style={{ padding: "2rem 0", textAlign: "center" }}>

	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
      <h2>Meet Our Team</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        {team.map((member, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "1.5rem",
            width: "220px"
          }}>
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "1rem"
              }}
            />
            <h3 style={{ margin: "0.5rem 0 0.25rem" }}>{member.name}</h3>
            <p style={{ color: "#555", margin: 0 }}>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
			</React.Fragment>
		);
	}
}

export default withRouter(Story);