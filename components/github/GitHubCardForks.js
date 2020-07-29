import React from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Card from 'react-bootstrap/Card'

const GitHubCardForks = () => {
    const { data, error } = useSWR('/api/github', fetcher)
    const numForks = data?.numFollwers ?? 354
    return (
        <div>
            <Card style={{ padding: '5px' }} className="shadow-border">
                <Card.Title>GitHub Forks</Card.Title>
                <Card.Text style={{ fontSize: '30px' }}>{numForks}</Card.Text>
            </Card>
        </div>
    )
}

export default GitHubCardForks