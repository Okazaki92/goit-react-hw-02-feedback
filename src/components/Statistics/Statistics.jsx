import propTypes from "prop-types"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className="statistics">
            <li className="item">Good: {good}</li>
            <li className="item">Neutral: {neutral}</li>
            <li className="item">Bad: {bad}</li>
            <li className="item">Total: {total}</li>
            <li className="item">Positive feedback: {positivePercentage}%</li>
        </ul>
    )
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
}