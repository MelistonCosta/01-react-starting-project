import TestCards from "../TestCards/TestCards.jsx";

export default function CardExercise() {
    return(
        <section id="examples">
            <h2>Cards Exercise: Available Experts</h2>
            <TestCards name="Anthony Blake">
            <p>Blake is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:anthony@example.com">Email Anthony</a></p>
            </TestCards>
            <TestCards name="Maria Miles">
            <p>Maria is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:maria@example.com">Email Maria</a></p>
            </TestCards>
        </section>
    )
}