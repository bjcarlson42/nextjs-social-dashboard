import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YouTubeCardSubs from '../components/youtube/YouTubeCardSubs'
import YouTubeCardViews from '../components/youtube/YouTubeCardViews'
import YouTubeCardVids from '../components/youtube/YouTubeCardVids'
import GitHubCardFollowers from '../components/github/GitHubCardFollowers'
import GitHubCardProjects from '../components/github/GitHubCardProjects'
import GitHubCardForks from '../components/github/GitHubCardForks'
import StravaCardMiles from '../components/strava/StravaCardMiles'
import StravaCardRuns from '../components/strava/StravaCardRuns'
import StravaCardElapsedTime from '../components/strava/StravaCardElapsedTime'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container">
        <h1 style={{ padding: '100px 0 10px 0' }} className="text-center">Ben's Dashboard</h1>
        <Row>
          <Col md>
            <YouTubeCardSubs />
            <br />
          </Col>
          <Col md>
            <YouTubeCardViews />
            <br />
          </Col>
          <Col md>
            <YouTubeCardVids />
            <br />
          </Col>
        </Row>

        <Row>
          <Col md>
            <GitHubCardForks />
            <br />
          </Col>
          <Col md>
            <GitHubCardProjects />
            <br />
          </Col>
          <Col md>
            <GitHubCardFollowers />
            <br />
          </Col>
        </Row>

        <Row>
          <Col md>
            <StravaCardMiles />
            <br />
          </Col>
          <Col md>
            <StravaCardRuns />
            <br />
          </Col>
          <Col md>
            <StravaCardElapsedTime />
            <br />  
          </Col>
        </Row>
      </div>
    </div>
  )
}
