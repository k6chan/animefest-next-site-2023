import {Col, Container, Row} from 'react-bootstrap' // add Col and Row when displaying image
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"


export default function Boardgames() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">BOARD GAMES</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">

                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Board Games room will be at the Marshall College Room in Price Center.</p>
                <p className="mb-4">Do you like good old-fashioned fun? Well in you&apos;re luck! Here in the
                Board Games room, we got all kinds of 15-minute classics ranging from teamwork tabletops
                like <i>Codenames!</i> to 1 hour high-stakes strategy games like <i>Catan</i>.</p>

                <p>If any games catch your eye, stop by our room 11AM-3PM!</p>

                

                <h4 className="text-left mb-4 display-text">List of Games</h4>
                <ul>
                    <li>Crabs in a Bucket</li>
                    <li>Sushi GO! Party</li>
                    <li>Codenames! Pictures</li>
                    <li>Trekking the World</li>
                    <li>Meepleland</li>
                    <li>Betrayal at the House on the Hill</li>
                    <li>Catan</li>
                    <li>Memoir &apos;44</li>
                    <li>Tiny Epic Western</li>
                    <li>Tiny Epic Dinosaurs</li>
                    <li>The Duke</li>
                    </ul>

                <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/board_game_club.jpg" alt="Board Game Club photo"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>
                
            </Container>
        </>
    )
}
