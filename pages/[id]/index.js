export default function MeetupPage() {
    return <p>Meetup Page</p>;
}

export async function getStaticProps(context) {
    const id = context.params.id;

    console.log(id);

    return {
        props: {
            meetupData: {
                id: id
            }
        }
    };
}