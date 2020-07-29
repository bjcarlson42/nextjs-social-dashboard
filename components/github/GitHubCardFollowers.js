import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const GitHubCardFollowers = () => {
    const { data, error } = useSWR('/api/github', fetcher)
    const numFollwers = data?.numFollwers ?? 476
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>GitHub Followers</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{numFollwers}</Card.Text>
            </Card>
        </div>
    )
}

export default GitHubCardFollowers