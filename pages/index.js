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

        <p className="text-center">These numbers are not accurate. This dashboard was for tutorial purposes only. If you are using this as your own dashboard and using your own API keys, it works.</p>
        <p className="text-center">Ex: <code>const numProjects = data?.numProjects ?? 56</code></p>
        <p className="text-center">The data is fetched as normal, but since the response is null, the '??' allows me to default to 56.</p>
      </div>
    </div>
  )
}
