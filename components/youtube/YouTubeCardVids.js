import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const YouTubeCardVids = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    const videoCount = data?.videoCount ?? 47
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>YouTube Videos</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{videoCount}</Card.Text>
            </Card>
        </div>
    )
}

export default YouTubeCardVids