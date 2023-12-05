export default function MeetupPage() {
    return <p>Meetup Page</p>;
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: "1"
                }
            },
            {
                params: {
                    id: "2"
                }
            }
        ],
        fallback: false
    };
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