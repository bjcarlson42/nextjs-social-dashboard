import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const StravaCardElapsedTime = () => {
    const { data, error } = useSWR('/api/strava', fetcher)
    const time = (data.movingTime * 0.000277778).toFixed(2) // convert from seconds to hours
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>Total Time</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{time} <span style={{fontSize: '15px'}}>hours</span></Card.Text>
            </Card>
        </div>
    )
}

export default StravaCardElapsedTime