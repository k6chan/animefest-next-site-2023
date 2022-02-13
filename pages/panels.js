import { Container } from 'react-bootstrap'


export default function Panels() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">PANELS</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p>Panels will be held at the Thurgood Marshall and Eleanor Roosevelt rooms in Price Center.</p>
        <p>The best place for learning more not just about anime, but passion and culture as well! Interesting discussion topics will be present and available for participation at your discretion!
          Some panels will even have workshops for a hands-on experience. More panels and information coming soon!</p>
        <p className="mb-0">Interested in hosting a panel? Please view our Panelist application <a href="https://forms.gle/FmQKZ6JMe9xvr3CU8">here.</a> The deadline to apply has been extended to April 16.</p>
      </Container>
    </>
  )
}
