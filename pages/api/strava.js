export default async (req, res) => {
    var key = process.env.STRAVA_KEY
    const response = await fetch('https://www.strava.com/api/v3/athletes/8696836/stats?access_token=' + key)
    const json = await response.json()
    const { count, distance } = json.all_run_totals
    const movingTime = json.all_run_totals.moving_time
    return res.status(200).json({
        count,
        distance,
        movingTime
    })
}