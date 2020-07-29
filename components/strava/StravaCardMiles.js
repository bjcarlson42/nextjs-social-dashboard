import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const StravaCardMiles = () => {
    const { data, error } = useSWR('/api/strava', fetcher)
    const distance = (data?.distance ?? 55000000 * 0.000621371).toFixed(2) //given in meters so we need to convert to miles
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>Total Miles Run</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{distance}</Card.Text>
            </Card>
        </div>
    )
}

export default StravaCardMiles