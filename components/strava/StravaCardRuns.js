import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const StravaCardRuns = () => {
    const { data, error } = useSWR('/api/strava', fetcher)
    const count = data?.count ?? '4,789'
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>Total Runs</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{count}</Card.Text>
            </Card>
        </div>
    )
}

export default StravaCardRuns