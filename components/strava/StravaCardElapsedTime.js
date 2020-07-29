import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const StravaCardElapsedTime = () => {
    const { data, error } = useSWR('/api/strava', fetcher)
    const time = (data?.movingTime ?? 33456000 * 0.000277778).toFixed(2) // convert from seconds to hours
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>Total Time</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{time}</Card.Text>
            </Card>
        </div>
    )
}

export default StravaCardElapsedTime