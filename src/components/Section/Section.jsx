import propTypes from "prop-types"

export const Section = ({ title, children }) => {
    return (
        <section className="section">
            <h2 className="section__title">{title}</h2>
            {children}
        </section>
        )
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired
}