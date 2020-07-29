import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const YouTubeCardViews = () => {
    const { data, error } = useSWR('/api/youtube', fetcher)
    if (error) {
        console.log(error)
    }
    const viewCount = data?.viewCount ?? '11,222,000'
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>YouTube Views</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{viewCount}</Card.Text>
            </Card>
        </div>
    )
}

export default YouTubeCardViews