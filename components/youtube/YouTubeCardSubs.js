import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const YouTubeCardSubs = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const subscriberCount = data?.subscriberCount ?? '34,222,111'
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>YouTube Subscribers</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{subscriberCount}</Card.Text>
            </Card>
        </div>
    )
}

export default YouTubeCardSubs