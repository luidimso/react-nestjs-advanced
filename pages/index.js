import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
    return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://luidimso:El_Loco-13@cluster0.okownu3.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db();

    const collection = db.collection("meetups");

    const meettups = await collection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meettups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}